# P_2860_USACO_06_JAN_Redundant_Paths_G

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
// https://www.luogu.com.cn/problem/P2860
int n, m;
//
struct Edge{
    int to, next;
} e[N << 1];
int head[N], idx = 1;
void add(int u, int v){
    // static int idx = 0;
    e[++idx] = (Edge) {v, head[u]};
    head[u] = idx;
}
//
int dfn[N], low[N], dfncnt;
int bri[N], d[N];
int dcc[N], cnt;
int stk[N], intstk[N], top;
void tarjan(int u, int in_edge){
    dfn[u] = low[u] = ++dfncnt;
    stk[++top] = u;
    for(int i = head[u];i;i = e[i].next){
        int v = e[i].to;
        if(!dfn[v]){
            tarjan(v, i);
            low[u] = min(low[u], low[v]);
            if(low[v] > dfn[u]){
                bri[i] = bri[i^1] = true;
            }
        }else if (i != (in_edge^1)){
            low[u] = min(low[u], dfn[v]);
        }
    }
    if(dfn[u] != low[u]) return;
    int v = -1;
    cnt++;
    while(v != u){
        v = stk[top--];
        dcc[v] = cnt;
    }
}

void solve(){
    cin >> n >> m;
    for(int i = 1;i <= m;i++){
        int u,v; cin >> u >> v;
        add(u, v);
        add(v, u);
    }
    for(int i = 1;i <= n;i++) if(!dfn[i]) tarjan(i, 0);
    for(int i = 2;i <= idx;i++){ // 为什么 i 从 2 开始 遍历 ? 为了满足 i^1 的计算
        if(bri[i]){
            d[dcc[e[i].to]]++;
        }
    }
    int sum = 0;
    for(int i = 1;i <= cnt;i++){
        if(d[i] == 1) sum ++;
    }
    cout << (sum + 1) / 2 << endl;
}

signed main(){
    #ifdef ONLINE_JUDGE
    // freopen("", "r", stdin);
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
    