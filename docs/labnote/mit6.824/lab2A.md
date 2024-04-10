# lab2A



```go
package raft

//
// this is an outline of the API that raft must expose to
// the service (or tester). see comments below for
// each of these functions for more details.
//
// rf = Make(...)
//   create a new Raft server.
// rf.Start(command interface{}) (index, term, isleader)
//   start agreement on a new log entry
// rf.GetState() (term, isLeader)
//   ask a Raft for its current term, and whether it thinks it is leader
// ApplyMsg
//   each time a new entry is committed to the log, each Raft peer
//   should send an ApplyMsg to the service (or tester)
//   in the same server.
//

import (
	//	"bytes"
	"math/rand"
	"sync"
	"sync/atomic"
	"time"

	//	"6.824/labgob"
	"6.824/labrpc"
)

const (
	Leader int = iota
	Follower
	Candidate
)

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

// as each Raft peer becomes aware that successive log entries are
// committed, the peer should send an ApplyMsg to the service (or
// tester) on the same server, via the applyCh passed to Make(). set
// CommandValid to true to indicate that the ApplyMsg contains a newly
// committed log entry.
//
// in part 2D you'll want to send other kinds of messages (e.g.,
// snapshots) on the applyCh, but set CommandValid to false for these
// other uses.
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

// A Go object implementing a single Raft peer.
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

func (rf *Raft) GetState() (int, bool) {
	var term int
	var isleader bool
	rf.mu.Lock()
	defer rf.mu.Unlock()
	term = rf.currentTerm
	if rf.Status == Leader {
		isleader = true
	} else {
		isleader = false
	}
	return term, isleader
}

func GetRandTimer() time.Duration {
	rand.Seed(time.Now().UnixNano())
	return time.Duration(rand.Intn(200)+200) * time.Millisecond
}

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

// save Raft's persistent state to stable storage,
// where it can later be retrieved after a crash and restart.
// see paper's Figure 2 for a description of what should be persistent.
func (rf *Raft) persist() {
	// Your code here (2C).
	// Example:
	// w := new(bytes.Buffer)
	// e := labgob.NewEncoder(w)
	// e.Encode(rf.xxx)
	// e.Encode(rf.yyy)
	// data := w.Bytes()
	// rf.persister.SaveRaftState(data)
}

// restore previously persisted state.
func (rf *Raft) readPersist(data []byte) {
	if data == nil || len(data) < 1 { // bootstrap without any state?
		return
	}
	// Your code here (2C).
	// Example:
	// r := bytes.NewBuffer(data)
	// d := labgob.NewDecoder(r)
	// var xxx
	// var yyy
	// if d.Decode(&xxx) != nil ||
	//    d.Decode(&yyy) != nil {
	//   error...
	// } else {
	//   rf.xxx = xxx
	//   rf.yyy = yyy
	// }
}

// A service wants to switch to snapshot.  Only do so if Raft hasn't
// have more recent info since it communicate the snapshot on applyCh.
func (rf *Raft) CondInstallSnapshot(lastIncludedTerm int, lastIncludedIndex int, snapshot []byte) bool {

	// Your code here (2D).

	return true
}

// the service says it has created a snapshot that has
// all info up to and including index. this means the
// service no longer needs the log through (and including)
// that index. Raft should now trim its log as much as possible.
func (rf *Raft) Snapshot(index int, snapshot []byte) {
	// Your code here (2D).

}

// example RequestVote RPC arguments structure.
// field names must start with capital letters!
type RequestVoteArgs struct {
	Term         int
	CandidateId  int // 请求选票的候选人的 ID
	LastLogIndex int // 候选人的最后日志条目的索引值
	LastLogTerm  int // 候选人最后日志条目的任期号
}

// example RequestVote RPC reply structure.
// field names must start with capital letters!
type RequestVoteReply struct {
	Term        int
	VoteGranted bool
}

// example RequestVote RPC handler.
func (rf *Raft) RequestVote(args *RequestVoteArgs, reply *RequestVoteReply) {
	// Your code here (2A, 2B).
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

// example code to send a RequestVote RPC to a server.
// server is the index of the target server in rf.peers[].
// expects RPC arguments in args.
// fills in *reply with RPC reply, so caller should
// pass &reply.
// the types of the args and reply passed to Call() must be
// the same as the types of the arguments declared in the
// handler function (including whether they are pointers).
//
// The labrpc package simulates a lossy network, in which servers
// may be unreachable, and in which requests and replies may be lost.
// Call() sends a request and waits for a reply. If a reply arrives
// within a timeout interval, Call() returns true; otherwise
// Call() returns false. Thus Call() may not return for a while.
// A false return can be caused by a dead server, a live server that
// can't be reached, a lost request, or a lost reply.
//
// Call() is guaranteed to return (perhaps after a delay) *except* if the
// handler function on the server side does not return.  Thus there
// is no need to implement your own timeouts around Call().
//
// look at the comments in ../labrpc/labrpc.go for more details.
//
// if you're having trouble getting RPC to work, check that you've
// capitalized all field names in structs passed over RPC, and
// that the caller passes the address of the reply struct with &, not
// the struct itself.
func (rf *Raft) sendRequestVote(server int, args *RequestVoteArgs, reply *RequestVoteReply) bool {
	ok := rf.peers[server].Call("Raft.RequestVote", args, reply)
	return ok
}

func (rf *Raft) SendEntries(i int, args *EntriesArgs, reply *EntriesApply) bool {
	ok := rf.peers[i].Call("Raft.AppendEntries", args, reply)
	return ok
}

// the service using Raft (e.g. a k/v server) wants to start
// agreement on the next command to be appended to Raft's log. if this
// server isn't the leader, returns false. otherwise start the
// agreement and return immediately. there is no guarantee that this
// command will ever be committed to the Raft log, since the leader
// may fail or lose an election. even if the Raft instance has been killed,
// this function should return gracefully.
//
// the first return value is the index that the command will appear at
// if it's ever committed. the second return value is the current
// term. the third return value is true if this server believes it is
// the leader.
func (rf *Raft) Start(command interface{}) (int, int, bool) {
	index := -1
	term := -1
	isLeader := true

	// Your code here (2B).

	return index, term, isLeader
}

// the tester doesn't halt goroutines created by Raft after each test,
// but it does call the Kill() method. your code can use killed() to
// check whether Kill() has been called. the use of atomic avoids the
// need for a lock.
//
// the issue is that long-running goroutines use memory and may chew
// up CPU time, perhaps causing later tests to fail and generating
// confusing debug output. any goroutine with a long-running loop
// should call killed() to check whether it should stop.
func (rf *Raft) Kill() {
	atomic.StoreInt32(&rf.dead, 1)
	// Your code here, if desired.
}

func (rf *Raft) killed() bool {
	z := atomic.LoadInt32(&rf.dead)
	return z == 1
}

// The ticker go routine starts a new election if this peer hasn't received
// heartsbeats recently.
func (rf *Raft) ticker() {
	DPrintf("%d 开始 ticker ", rf.me)
	defer DPrintf("%d 已经不需要 ticker 了", rf.me)
	for rf.killed() == false {

		// Your code here to check if a leader election should
		// be started and to randomize sleeping time using
		// time.Sleep().
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
					if rf.ready {
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

// the service or tester wants to create a Raft server. the ports
// of all the Raft servers (including this one) are in peers[]. this
// server's port is peers[me]. all the servers' peers[] arrays
// have the same order. persister is a place for this server to
// save its persistent state, and also initially holds the most
// recent saved state, if any. applyCh is a channel on which the
// tester or service expects Raft to send ApplyMsg messages.
// Make() must return quickly, so it should start goroutines
// for any long-running work.
func Make(peers []*labrpc.ClientEnd, me int,
	persister *Persister, applyCh chan ApplyMsg) *Raft {
	rf := &Raft{
		mu:          sync.Mutex{},
		peers:       peers,
		persister:   persister,
		me:          me,
		dead:        0,
		Status:      Follower,
		currentTerm: 0,
		votedFor:    -1,
		LeaderId:    -1,
		log:         []ApplyMsg{},
		commitIndex: 0,
		lastApplied: 0,
		nextIndex:   []int{},
		matchIndex:  []int{},
		timer:       time.NewTimer(GetRandTimer()),
		ready:       false,
	}
	rf.peers = peers
	rf.persister = persister
	rf.me = me

	// Your initialization code here (2A, 2B, 2C).

	// initialize from state persisted before a crash
	rf.readPersist(persister.ReadRaftState())

	// start ticker goroutine to start elections
	go rf.ticker()

	return rf
}

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

			if relpy.Term > rf.currentTerm {
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

	voteMutex.Lock() // 调用 Wait 方法的时候一定要持有锁
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
	rf.mu.Lock()
	DPrintf("%d 选举成功 term: %d", rf.me, rf.currentTerm)
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
				go rf.LeaderSendEntries()
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
			// rf.mu.Lock()
			// defer rf.mu.Unlock()
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
			if args.Term > rf.currentTerm {
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

