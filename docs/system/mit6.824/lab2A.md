# lab2A



## 数据结构

```go
type EntriesArgs struct {
	Term         int
	LeaderId     int
	PrevLogIndex int      // 紧邻新日志条目之前的那个日志条目的索引
	PrevLogTerm  int      // 紧邻新日志条目之前的那个日志条目的任期
	Entries      []Entrie // 需要被保存的日志条目（被当做心跳使用时，则日志条目内容为空；为了提高效率可能一次性发送多个）
	LeaderCommit int      // 领导人的已知已提交的最高的日志条目的索引
}
type EntriesApply struct {
	Term    int
	Success bool
}
type Entrie struct {
}
type ApplyMsg struct {
	CommandValid bool
	Command      interface{}
	CommandIndex int

	// For 2D:
	SnapshotValid bool
	Snapshot      []byte
	SnapshotTerm  int
	SnapshotIndex int
}
type RequestVoteArgs struct {
	Term         int
	CandidateId  int // 请求选票的候选人的 ID
	LastLogIndex int // 候选人的最后日志条目的索引值
	LastLogTerm  int // 候选人最后日志条目的任期号
}

type RequestVoteReply struct {
	Term        int
	VoteGranted bool
}

type Raft struct {
	mu        sync.Mutex          // Lock to protect shared access to this peer's state
	peers     []*labrpc.ClientEnd // RPC end points of all peers
	persister *Persister          // Object to hold this peer's persisted state
	me        int                 // this peer's index into peers[]
	dead      int32               // set by Kill()

	// Your data here (2A, 2B, 2C).
	// Look at the paper's Figure 2 for a description of what
	// state a Raft server must maintain.
	Status int
	// 持久性状态
	currentTerm int // 服务器已知最新的任期（在服务器首次启动时初始化为0，单调递增）
	votedFor    int // 当前任期内收到选票的 candidateId，如果没有投给任何候选人 则为空
	LeaderId    int
	log         []ApplyMsg // 日志条目；每个条目包含了用于状态机的命令，以及领导人接收到该条目时的任期（初始索引为1）
	// 易失性状态
	commitIndex int // 已知已提交（到日志中）的最高的日志条目的索引（初始值为0，单调递增）
	lastApplied int // 已经被应用到状态机的最高的日志条目的索引（初始值为0，单调递增）
	// 领导人（服务器）上的易失性状态 (选举后已经重新初始化)
	nextIndex  []int // 对于每一台服务器，发送到该服务器的下一个日志条目的索引（初始值为领导人最后的日志条目的索引+1）
	matchIndex []int // 对于每一台服务器，已知的已经复制到该服务器的最高日志条目的索引（初始值为0，单调递增）

	timer *time.Timer
	ready bool
}
```

## Leader选举

```go
func (rf *Raft) ticker() {
	DPrintf("%d 开始 ticker ", rf.me)
	defer DPrintf("%d 已经不需要 ticker 了", rf.me)
	for rf.killed() == false {
		select {
		case <-rf.timer.C:
			{
				rf.mu.Lock()
				nowState := rf.Status // 记录下状态，以免switch访问rf.state时发送DATA RACE
				rf.mu.Unlock()

				DPrintf("%d Ticker", rf.me)
				switch nowState {
				case Leader:
					return
				case Candidate:
					rf.timer.Stop()
					rf.timer.Reset(GetRandTimer())
					// DPrintf("%d 的定时器 重新 设置", rf.me)
					rf.mu.Lock()
					if rf.ready { // 防止俩个 候选人 同时候选 相互等待
						rf.mu.Unlock()
						go rf.Election()
					} else {
						rf.ready = true
						rf.mu.Unlock()
					}
				case Follower:
					rf.timer.Stop()
					rf.timer.Reset(GetRandTimer())
					// DPrintf("%d 的定时器 重新 设置", rf.me)
					go rf.Election()
				}
			}
		}
	}
}
```

```go
func (rf *Raft) Election() {
	rf.BecomeCandidate()

	rf.mu.Lock()
	vote := 1
	finished := 1
	var voteMutex sync.Mutex
	cond := sync.NewCond(&voteMutex)
	rf.ready = false
	rf.mu.Unlock()

	for i, _ := range rf.peers {
		if i == rf.me {
			continue
		}
		args := RequestVoteArgs{
			Term:         rf.currentTerm,
			CandidateId:  rf.me,
			LastLogIndex: len(rf.log) - 1,
			LastLogTerm:  0,
		}
		go func(i int) {
			if rf.killed() {
				return
			}

			relpy := RequestVoteReply{}
			ok := rf.sendRequestVote(i, &args, &relpy)
			if !ok {
				DPrintf("sendRequestVote: %d 连接到 %d 失败", rf.me, i)
				return
			}
			rf.mu.Lock()

			if rf.Status != Candidate || rf.currentTerm != args.Term { 
				rf.mu.Unlock()
				return
			}

			if relpy.Term > rf.currentTerm { // 每次请求后 检查 Term
				rf.Status = Follower
				rf.currentTerm = relpy.Term
				rf.votedFor = -1
				rf.persist()
				rf.mu.Unlock()
				rf.timer.Stop()
				rf.timer.Reset(GetRandTimer())
				// DPrintf("%d 的定时器 重新 设置", rf.me)
				return
			}
			rf.mu.Unlock()

			voteMutex.Lock()
			if relpy.VoteGranted {
				vote++
				DPrintf("%d 获得了 %d votes", rf.me, vote)
			}
			DPrintf("%d 给 %d 一票", i, rf.me)
			finished++
			voteMutex.Unlock()
			cond.Broadcast()
		}(i)
	}

	voteMutex.Lock() // 调用 Wait 方法的时候一定要持有锁 !!!
	midVote := len(rf.peers)/2 + 1

	for vote < midVote && finished != len(rf.peers) {
		cond.Wait()
		rf.mu.Lock()
		isCandidate := rf.Status != Candidate
		rf.mu.Unlock()
		if isCandidate {
			voteMutex.Unlock()
			return
		}
	}

	if vote >= midVote {
		rf.Convert2Leader()
	} else {
		DPrintf("fail to Election %d", rf.me)
	}
	voteMutex.Unlock()
}

func (rf *Raft) Convert2Leader() {
  DPrintf("%d 选举成功 term: %d", rf.me, rf.currentTerm)
  
	rf.mu.Lock()
	rf.Status = Leader
	rf.votedFor = rf.me
	rf.LeaderId = rf.me
	rf.persist()
	rf.mu.Unlock()
  
	go func() {
		for !rf.killed() {
			rf.mu.Lock()
			stillLeader := (rf.Status == Leader)
			rf.mu.Unlock()
			if stillLeader {
				go rf.LeaderSendEntries() // 心跳
				time.Sleep(100 * time.Millisecond)
			} else {
				rf.timer.Stop()
				rf.timer.Reset(GetRandTimer())
				// DPrintf("%d 的定时器 重新 设置", rf.me)
				DPrintf("!!!!! %d 已经不是 Leader 了", rf.me)
				go rf.ticker()
				return
			}
		}
	}()
}
```

每次成为候选人 Term++

```go
func (rf *Raft) BecomeCandidate() {
	rf.mu.Lock()
	defer rf.mu.Unlock()
	rf.Status = Candidate
	rf.currentTerm++
	rf.votedFor = rf.me
	rf.LeaderId = -1
	rf.persist()
	DPrintf("%d 成为了候选人 term: %d", rf.me, rf.currentTerm)
}
```

通过 RPC 请求投票

```go
func (rf *Raft) RequestVote(args *RequestVoteArgs, reply *RequestVoteReply) {
	rf.mu.Lock()
	defer rf.mu.Unlock()
	if args.Term < rf.currentTerm {
		reply.VoteGranted = false
		reply.Term = rf.currentTerm
		return
	}
	if args.Term > rf.currentTerm {
		rf.Status = Follower
		rf.votedFor = -1
		rf.LeaderId = -1
		rf.currentTerm = args.Term
		rf.persist()
	}
	if rf.votedFor == -1 || rf.votedFor == args.CandidateId {
		reply.VoteGranted = true
    rf.votedFor = args.CandidateId
		rf.LeaderId = -1
		rf.persist()
		rf.timer.Reset(GetRandTimer())
		// DPrintf("%d 的定时器 重新 设置", rf.me)
	}
}
```

Leader 发送心跳

```go
func (rf *Raft) LeaderSendEntries() {
	// DPrintf("%d 发送了 心跳", rf.me)
	rf.mu.Lock()
	defer rf.mu.Unlock()
	for i, _ := range rf.peers {
		if i == rf.me {
			continue
		}
		args := EntriesArgs{
			Term:         rf.currentTerm,
			LeaderId:     rf.me,
			PrevLogIndex: 0,
			PrevLogTerm:  0,
			Entries:      []Entrie{},
			LeaderCommit: Leader,
		}
		go func(i int) {
			if rf.killed() {
				return
			}
			rf.mu.Lock()
			if rf.Status != Leader {
				rf.mu.Unlock()
				return
			}
			rf.mu.Unlock()

			relpy := EntriesApply{}
			ok := rf.SendEntries(i, &args, &relpy)
			if !ok {
				DPrintf("SendEntries: %d 连接到 %d 失败", rf.me, i)
				return
			}
			// 处理RPC回复之前先判断，如果自己不再是leader了则直接返回
			rf.mu.Lock()
			if rf.Status != Leader || rf.currentTerm != args.Term {
				return
			}
			if args.Term > rf.currentTerm { // 请求完检查 Term
				rf.votedFor = -1
				rf.Status = Follower
				rf.currentTerm = args.Term
				rf.persist()
				return
			}
			rf.mu.Unlock()
		}(i)
	}
}
```

Log 添加

```go
func (rf *Raft) AppendEntries(args *EntriesArgs, reply *EntriesApply) {
	rf.mu.Lock()
	defer rf.mu.Unlock()
	if args.Term < rf.currentTerm {
		reply.Success = false
		reply.Term = rf.currentTerm
		return
	}
	if args.Term > rf.currentTerm {
		rf.votedFor = -1 // 当term发生变化时，需要重置votedFor
		rf.currentTerm = args.Term
		rf.persist()
	}
	rf.timer.Stop()
	rf.timer.Reset(GetRandTimer())
	// DPrintf("%d 的定时器 重新 设置", rf.me)
	rf.Status = Follower
	rf.LeaderId = args.LeaderId
	DPrintf("%d 给 %d 发送了心跳 term: %d", args.LeaderId, rf.me, rf.currentTerm)
}
```

