# crepl

## 学习记录

1. dlopen 和 dlsym 对 so 文件的动态加载

2. so 文件

   



```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <dlfcn.h>
#include <string.h>
#include <sys/wait.h>

#ifdef LOCAL_MACHINE
	#define debug(format, arg...) printf(format, ##arg)
	#define debug_info(format, ...) printf("\033[1m\033[45;33m Info:[%s:%s(%d)]: \033[0m" format "\n", __FILE__, __FUNCTION__, __LINE__, ##__VA_ARGS__);
#else
	#define debug(format, arg...);
	#define debug_info(format, ...)
#endif

#define zassert(x, s) \
	do { if ((x) == 0) { printf("%s\n", s); assert((x)); } } while (0)

static int wrapper_num;
static char wrapper_filec[] = "/tmp/crepl_tmp.c";
static char wrapper_fileso[] = "/tmp/crepl_tmp.so";
static FILE* wrapper_fd;
static char* argv[] = {
    "gcc",
    "-fPIC",
	"-shared",
    wrapper_filec,
    "-o",
    wrapper_fileso,
    NULL
};

void compile(){
    if(fork() == 0){
        execvp("gcc", argv);
        perror("fork err");
        exit(EXIT_FAILURE);
    }
    wait(NULL);
}

int main(){
    // create empty file c
    wrapper_fd = fopen(wrapper_filec, "w");
    fclose(wrapper_fd);

    static char buf[4096];
    void* handle;
    int (*wrapper)();
    char wrapper_buf[100];

    while(1){
        printf("crepl>");
        fflush(stdout);
        if(!fgets(buf, sizeof buf, stdin)){
            break;
        }
        int len = strlen(buf);
        if(buf[0] == '\n') continue;
        if(len >= 3 && !strncmp(buf,  "int", 3)){
            wrapper_fd = fopen(wrapper_filec, "a"); // append
            fprintf(wrapper_fd, "\n%s\n;", buf);
            puts("OK");
            fclose(wrapper_fd);
        } else {
            wrapper_fd = fopen(wrapper_filec, "a"); // append
            fprintf(wrapper_fd, "%s%s%d%s%s%s", 
                "int ", "__expr_wrapper_", wrapper_num,
                "(){return ", buf, ";}\n"
            );
            fclose(wrapper_fd);
            compile();
            handle = dlopen(wrapper_fileso, RTLD_LAZY); // 懒加载
            if(!handle){
                printf("dlopen err\n");
                continue;
            }
            sprintf(wrapper_buf, "%s%d", "__expr_wrapper_", wrapper_num);
            wrapper = (int (*)()) dlsym(handle, wrapper_buf);
            if(!wrapper){
                printf("wrapper err\n");
            } else {
                printf("=%d\n", wrapper());
            }
            wrapper_num++;
            dlclose(handle);
        }
    }

    return 0;
}
```

