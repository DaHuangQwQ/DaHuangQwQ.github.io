# P_2812_校园网络_USACO_Network_of_Schools加强版

<style>
@import '/public/css/cpp.css';
</style>


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
// https://www.luogu.com.cn/problem/P2812

int n;

vector<int> g[N];

int dfn[N], low[N], dfncnt;
int stk[N], instk[N], top;
int scc[N], cnt;
int din[N], dout[N];

void tarjan(int u){
    dfn[u] = low[u] = ++dfncnt;
    stk[++top] = u;
    instk[u] = 1;
    for(auto v : g[u]){
        if(!dfn[v]){
            tarjan(v);
            low[u] = min(low[u], low[v]);
        }else if(instk[v]){
            low[u] = min(low[u], dfn[v]);
        }
    }
    if(dfn[u] == low[u]){
        int v; ++cnt;
        do {
            v = stk[top--];
            instk[v] = 0;
            scc[v] = cnt;
        } while(u != v);
    }
}

void solve(){
    cin >> n;
    for(int i = 1, u;i <= n;i++){
        while(cin >> u, u){
            g[i].push_back(u);
        }
    }
    for(int i = 1;i <= n;i++) if(!dfn[i]) tarjan(i);
    for(int i = 1;i <= n;i++){
        for(auto v : g[i]){
            if(scc[i] != scc[v]){
                din[scc[v]]++;
                dout[scc[i]]++;
            }
        }
    }
    int a = 0, b = 0;
    for(int i = 1;i <= cnt;i++){ 
        if(!din[i]) a++;
        if(!dout[i]) b++;
    }
    cout << a << endl;
    if(cnt == 1) cout << 0 << endl;
    else
    cout << max(a, b) << endl;
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
    