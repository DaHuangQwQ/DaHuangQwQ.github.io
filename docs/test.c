#include <stdio.h>
#include <dirent.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>

#define S 256
#define L 512

typedef struct {
    int processID;
    char processName[S];
    int parentID;
    int parentIndex;
    struct Process* children[S];
    int childrenCnt;
} Process;

void getProcessList(Process*, int*);
int isNumeric(const char*);
void displayTree(Process* , int, int);
int getParentIndex(Process*, int);
void buildProcessTree(Process*, int*);


int main(int argc, char* argv[]){
    Process processList[L];
    for(int i = 0;i < L;i++){
        processList[i].parentID = -1;
    }
    int count = 0;
    int opcode = 0;
    for(int i = 0;i < argc;i++){
        assert(argv[i]);
        if(strncmp(argv[i], "-p", 2) == 0){
            opcode = 1;
            break;
        }
        if(strncmp(argv[i], "-n", 2) == 0){
            opcode = 2;
            break;
        }
        if(strncmp(argv[i], "-V", 2) == 0){
            opcode = 3;
            break;
        }
    }

    switch(opcode){
        case 1: 
        getProcessList(processList, &count);
        buildProcessTree(processList, &count);
     displayTree(&processList[0], 0, 0);
    }

    return 0;
}



int isNumeric(const char* ch){
    if(ch == NULL){
        return 0;
    }
    for(int i = 0;ch[i] != '\0';i++){
        if(ch[i] > '9' || ch[i] < '0')
            return 0;
    }
    return 1;
}


void getProcessList(Process* processList, int* count){
    int cnt = 0;
    DIR* procIDR = opendir("/proc");
    assert(procIDR);
    struct dirent* entry;
    while((entry = readdir(procIDR)) != NULL){
        if(entry->d_type == DT_DIR && isNumeric(entry->d_name)){
            char statusPath[L];
            char line[S];

            snprintf(statusPath, sizeof statusPath, "/proc/%s/status", entry->d_name);
            FILE* statusFile = fopen(statusPath, "r");
            if(statusFile == NULL){
                printf("file error");
                exit(0);
            }
            while(fgets(line, sizeof line, statusFile) != NULL){
                if(strncmp(line, "Name:", 5) == 0){
                    sscanf(line, "Name:\t%s", processList[cnt].processName);
                }
                if(strncmp(line, "Pid:", 4) == 0){
                    sscanf(line, "Pid:\t%d", &processList[cnt].processID);
                }
                if(strncmp(line, "PPid:", 5) == 0){
                    sscanf(line, "PPid:\t%d", &processList[cnt].parentID);
                }
            }
            
            cnt++;
            fclose(statusFile);
        }
    }
    *count = cnt;
    closedir(procIDR);
}


int getParentIndex(Process* processList, int i){
    // printf("1#%d\n", processList[i].processID);
    // printf("2#%d\n", processList[i].parentID);
    // int l = 0; 
    // int r = i - 1;
    // while(l <= r){
    //     if(processList[r].processID == processList[i].parentID){
    //         return r;
    //     }
    //     int mid = (l + r) >> 1;
    //     // printf("mid#%d\n", mid);
    //     if(processList[mid].processID == processList[i].parentID){
    //         return mid;
    //     }
    //     if(processList[mid].processID > processList[i].parentID){
    //         r = mid;
    //     }
    //     if(processList[mid].processID < processList[i].parentID){
    //         l = mid;
    //     }
    // }
    for(int j = 0;j < i;j++){
        if(processList[j].processID == processList[i].parentID){
            return j;
        }
    }
    return -1;
}

void
buildProcessTree(Process* processList, int* cnt){
    int max = 0;
    for(int i = 0;i < *cnt; i++){
        int index = getParentIndex(processList, i);
        // printf("#%d\n", index);
        if(index == -1 || index == 1) continue;
        processList[index].children[processList[index].childrenCnt++] = (struct Process *)&processList[i];
    }
}


void displayTree(Process* proc, int tabCnt, int isFirst) { 
    // printf("#%d\n", proc->childrenCnt);
    if(isFirst)
        printf("|");
    else {
        for(int i = 0; i < tabCnt; i++) {
        printf("\t");
        }
    }
    printf("%s(%d)(%d)", proc->processName, proc->processID, proc->parentID);
    if(proc->childrenCnt == 0) {
        printf("\n");
        return;
    }
    for(int i = 0; i < proc->childrenCnt; i++) {
        if(i == 0) 
        isFirst = 1;
        else
        isFirst = 0;
        displayTree((Process*)proc->children[i], tabCnt + 2, isFirst);
    }
}