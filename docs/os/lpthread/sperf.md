

## 学习记录

1. fork 和 execve 系统调用
2. pipe 管道进行进程间的通信
3. 流处理

## 系统调用 pipe 的使用

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(int argc, char* argv[]){
    int pipe_fd[2]; // 用于存放管道的文件描述符

    if (pipe(pipe_fd) == -1) {
        perror("pipe");
        exit(EXIT_FAILURE);
    }

    if(fork() == 0){
        close(pipe_fd[1]);
        char buf[512];
        if(read(pipe_fd[0], buf, sizeof buf) == -1){
            perror("read");
            exit(EXIT_FAILURE);
        }
        printf(">%s\n", buf);
        close(pipe_fd[0]);
    }else{
        close(pipe_fd[0]);
        const char* str = "hello, world";
        if(write(pipe_fd[1], str, sizeof str) == -1){
            perror("write");
            exit(EXIT_FAILURE);
        }
        close(pipe_fd[1]);


        wait(NULL);

        exit(EXIT_SUCCESS);
    }
    return 0;
}
```

> write 要的是字符串长度
>
> read 要的是字节长度





```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <regex.h>
#include <sys/wait.h>

char buf[1024];
struct info{
    double time;
    char name[100];
    struct info* next;
};
struct info* syscall_info = NULL;
int tot;
```



## 链表的添加

```c
void add(double time, char *name) {
	for (struct info *i = syscall_info; i != NULL; i = i->next) {
		if (strcmp(i->name, name) == 0) {
			i->time += time;
			return;
		}
	}
    tot++;
	struct info *si = (struct info *)malloc(sizeof(struct info));
	strcpy(si->name, name);
	si->time = time;
	si->next = syscall_info;

	syscall_info = si;
}
```



> fgets 和 fdopen 的使用 流处理

```c

int main(int argc, char* argv[]){
    int pipe_fd[2]; // 用于存放管道的文件描述符

    if (pipe(pipe_fd) == -1) {
        perror("pipe");
        exit(EXIT_FAILURE);
    }

    char* exec_argv[] = {"/bin/strace","-r", argv[1], NULL};
    char* exec_envp[] = {"PATH=/bin", NULL};

    
    if(fork() == 0){
        close(pipe_fd[0]);
        dup2(pipe_fd[1], STDOUT_FILENO);
        dup2(pipe_fd[1], STDERR_FILENO);
        close(pipe_fd[1]);
        execve("/bin/strace", exec_argv, exec_envp);
        perror("execve");
        exit(EXIT_FAILURE);
    }else{
        close(pipe_fd[1]);
        double time;
        char name[50];

        while(fgets(buf, sizeof buf, fdopen(pipe_fd[0], "r"))){
            sscanf(buf, "%lf %s", &time, name);
            if(name[0] == '+') continue;
            for(int i = 0; name[i]; ++i){
                if(name[i] == '('){
                    name[i] = '\0';
                    break;
                }
            }
            // printf(">%lf(%s)\n", time, name);
            add(time, name);
        }
        close(pipe_fd[0]);
    }

    
	double total = 0, others = 0;
	struct info syscall_sort[tot] = { };
	// 所有系统调用的排序
	for (struct info *i = syscall_info; i != NULL; i = i->next) {
		for (int j = 0; j < tot-1; j++) {
			if (syscall_sort[j].time < i->time) {
				for (int k = tot-2; k >= j; k--) {
					syscall_sort[k + 1] = syscall_sort[k];
				}
				syscall_sort[j] = *i;
				break;
			}
		}
		total += i->time;
		/* printf("%s (%lf)\n", i->time, i->name); */
		/* fflush(stdout); */
	}

	others = total;
	for (int i = 0; i < tot; i++) {
		if (syscall_sort[i].time > 0) {
			printf("%s (%lf%%)\n", syscall_sort[i].name, syscall_sort[i].time / total);
			fflush(stdout);
			others -= syscall_sort[i].time;
		}
		else {
			printf("%s (%lf%%)\n", "others", others / total);
			fflush(stdout);
		}
	}

	for (struct info *i = syscall_info; i != NULL; ) {
		struct info *j = i;
		i = i->next;
		free(j);
	}
    return 0;
}
```

