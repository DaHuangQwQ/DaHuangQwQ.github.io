#include <iostream>
#include <cstring>
using namespace std;
const int N = 200010;
int n;
struct{
    int next,to,w;
} e[N];
int head[N],idx = -1;
void add(int u,int v, int w){
    e[++idx].to = v;
    e[idx].w = w;
    e[idx].next = head[u];
    head[u] = idx;
}
int ch[N][2], cnt, sum[N];
void dfs(int x, int fa){
    for(int i = head[x]; ~i ; i = e[i].next){
        int y = e[i].to;
        int w = e[i].w;
        if(y == fa) continue;
        sum[y] = sum[x] ^ w;
        dfs(y , x);
    }
}
void build(int val,int x = 0){
    for(int i=(1<<30);i;i>>=1){
        bool c=val&i;//取出二进制下这个数的当前位置
        if(!ch[x][c]){
            ch[x][c]=++cnt;
        }
        x=ch[x][c];
    }
}
int query(int val,int x = 0){
    int ans=0;
    for(int i=(1<<30);i;i>>=1){
        bool c=val&i;
        if(ch[x][!c]){//如果这一位可以进行异或就沿着这一条往下走
            ans+=i;
            x=ch[x][!c];
        }
        else x=ch[x][c];//否则就沿着另一条路往下走
    }
    return ans;
}
int main(){
    memset(head, -1, sizeof head);
    cin >> n;
    for(int i = 1;i < n;i++){
        int u,v,w; cin >> u >> v >> w;
        add(u,v,w);
        add(v,u,w);
    }
    dfs(1,-1);
    for(int i = 1;i <= n;i++){
        build(sum[i]);
    }
    int res = 0;
    for(int i = 1;i <= n;i++){
        res = max(res , query(sum[i]));
    }
    cout << res << endl;
    return 0;
}