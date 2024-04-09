# We_Need_More_Bosses

<style scoped>
@import '/public/css/cpp.css';
</style>


```cpp
#ifdef ONLINE_JUDGE
#include<bits/stdc++.h>
#else
#include <iostream>
#include <stdio.h>
#include <assert.h>
#include <algorithm>
#include <cstring>
#include <queue>
#include <vector>
#endif
using namespace std;
#define ll long long
#define endl "\n"
typedef pair<int, int> PII;


#ifdef LOCAL_MACHINE
	#define debug(format, arg...) printf(format, ##arg)
	#define debug_info(format, ...) printf("\033[1m\033[45;33m Info:[%s:%s(%d)]: \033[0m" format "\n", __FILE__, __FUNCTION__, __LINE__, ##__VA_ARGS__);
#else
	#define debug(format, arg...);
	#define debug_info(format, ...)
#endif

#define zassert(x, s) \
	do { if ((x) == 0) { printf("%s\n", s); assert((x)); } } while (0)


const int N = 1e5 + 10;
// https://www.luogu.com.cn/problem/CF1000E
int n,m;
//
struct Edge {
    int to, next;
} e[N << 1], ne[N << 1];
int head[N], nhead[N];
void add(int u, int v){
    static int idx = 0;
    e[++idx] = (Edge){v, head[u]};
    head[u] = idx;
}
void nadd(int u, int v){
    static int idx = 0;
    ne[++idx] = (Edge){v, nhead[u]};
    nhead[u] = idx;
}
//
int dfn[N], low[N], dfncnt;
int stk[N], instk[N], top;
int bri[N];
int scc[N], cnt;
void tarjan(int u, int in_edge){
    dfn[u] = low[u] = ++dfncnt;
    stk[++top] = u;
    instk[u] = true;
    for(int i = head[u];i;i = e[i].next){
        int v = e[i].to;
        if(!dfn[v]){
            tarjan(v, i);
            low[u] = min(low[u], low[v]);
            if(low[v] > dfn[u]){
                bri[i] = bri[i^1] = true;
            }
        }else if(instk[v]){ // 不是反边
            low[u] = min(low[u], dfn[v]);
        }
    }
    if(dfn[u] == low[u]){
        int v = -1;
        cnt++;
        while(v != u){
            v = stk[top--];
            instk[v] = false;
            scc[v] = cnt;
        }
    }
}

int dis[N];
int bfs(int u){
    int res = u;
    memset(dis, 0x3f, sizeof dis);
    queue<int> q;
    q.push(u);
    dis[u] = 0;
    while(!q.empty()){
        int u = q.back();
        debug(">%d \n", u);
        q.pop();
        for(int i = nhead[u];i;i = ne[i].next){
            int v = ne[i].to;
            if(dis[v] != 0x3f3f3f3f) continue;
            dis[v] = dis[u] + 1;
            if(dis[v] > dis[u]) res = v;
            q.push(v);
        }
    }
    return res;
}

void solve(){
    cin >> n >> m;
    for(int i = 1;i <= m;i++){
        int u,v; cin >> u >> v;
        add(u,v); add(v,u);
    }
    tarjan(1, 0);
    for(int u = 1;u <= n;u++){
        for(int i = head[u];i;i = e[i].next){
            int v = e[i].to;
            if(scc[v] == scc[u]) continue;
            nadd(u, v);
        }
    }
    cout << dis[bfs(bfs(scc[1]))];
}

signed main(){
    #ifdef ONLINE_JUDGE
    freopen("", "r", stdin);
    #endif
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}
```
    