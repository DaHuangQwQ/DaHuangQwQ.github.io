<link rel="stylesheet" href="./_index.css">

# P_2341_USACO_03_FALL_HAOI_2006_受欢迎的牛_G

```cpp
// #include<bits/stdc++.h>
#include <iostream>
#include <assert.h>
#include <algorithm>
#include <cstring>
#include <queue>
#include <vector>
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
// https://www.luogu.com.cn/problem/P2341
int n, m;

//
struct Edge{
    int to, next;
} e[N << 1];
int head[N];
void add(int u, int v){
    static int idx = 0;
    e[++idx] = (Edge){v, head[u]};
    head[u] = idx;
}

//
int dfn[N], low[N], dfncnt;
int stk[N], instk[N], top;
int scc[N], siz[N], cnt;

void tarjan(int u){
    dfn[u] = low[u] = ++dfncnt;
    stk[++top] = u;
    instk[u] = 1;
    for(int i = head[u];i;i = e[i].next){
        int v = e[i].to;
        if(!dfn[v]){
            tarjan(v);
            low[u] = min(low[u], low[v]);
        } else {
            low[u] = min(low[u], dfn[v]);
        }
    }
    if(dfn[u] == low[u]){
        int v; ++cnt;
        do {
            v = stk[top--];
            instk[v] = 0;
            scc[v] = cnt;
            siz[cnt]++;
         } while(v != u);
    }
}

int din[N], dout[N];

void solve(){
    cin >> n >> m;
    for(int i = 1;i <= m;i++){
        int u,v; cin >> u >> v;
        add(u, v);
    }
    for(int i = 1;i <= n;i++) if(!dfn[i]) tarjan(i);
    for(int u = 1;u <= n;u++){
        for(int i = head[u];i;i = e[i].next){
            int v = e[i].to;
            if(scc[u] == scc[v]) continue;
            din[scc[v]]++;
            dout[scc[u]]++;
        }
    }
    int res = 0, zero = 0;
    for(int i = 1;i <= cnt;i++){
        if(dout[i] == 0) {
            res = siz[i];
            zero++;
        }
    }
    if(zero > 1) cout << 0 << endl;
    else
    cout << res << endl;
}

signed main(){
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
    