#include <iostream>
#include <cstring>
using namespace std;
const int N = 1000010;
int ch[N][26], cnt[N], idx, vis[N];
int n;

void insert(char *s){
    int p = 0;
    for(int i = 0; s[i];i++){
        int j = s[i] - 'a';
        if(!ch[p][j]) ch[p][j] = ++idx;
        p = ch[p][j];
    }
    cnt[p] ++;
}

int query(char *s){
    int p = 0;
    for(int i = 0; s[i]; i++){
        int j = s[i] - 'a';
        if(!ch[p][j]) return 0;
        p = ch[p][j];
    }
    if(vis[p] == 1){
        return 2;
    }
    vis[p] = 1;
    return cnt[p];
}
int main(){
    cin >> n;
    char s[N];
    while(n--){
        cin >> s;
        insert(s);
    }
    cin >> n;
    while(n--){
        cin >> s;
        int op = query(s);
        if(op == 0){
            cout << "WRONG" << endl;
        }
        if(op == 1){
            cout << "OK" << endl;
        }
        if(op == 2){
            cout << "REPEAT" << endl;
        }
    }
    return 0;
}