#include <iostream>
#include <math.h>
#define ll long long
using namespace std;
const int N = 10000010;
struct edge{
    int to, w, next;
} e[N * 2];
ll head[N], idx;
ll n, size[N],res;

void add(int u, int v, int w){
    ++idx;
    e[idx].w = w;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx;
}

void dfs(int u, int fa){
    size[u] = 1;
    for(int i = head[u]; i ; i = e[i].next){
        int v = e[i].to;
        if(v == fa) continue;
        dfs(v, u);
        size[u] += size[v];
        // cout << size[u] << " " << size[v] << endl;
        res += e[i].w * abs(2*size[v]-n); // 点睛之笔 遍历到树的左面但不知道 右面的大小
    }
}

int main(){
    cin >> n;
    for(int i = 1;i < n; i++){
        int u,v,w; cin >> u >> v >> w;
        add(u,v,w);
        add(v,u,w);
    }
    dfs(1, 0);
    cout << res << endl;
    return 0;
}