<link rel="stylesheet" href="./_index.css">

# P_3469_POI_2008_BLO_Blockade

```cpp
// #include<bits/stdc++.h>
#include <iostream>
#include <stdio.h>
#include <assert.h>
#include <algorithm>
#include <cstring>
#include <queue>
#include <vector>
using namespace std;
#define ll long long
#define endl "\n"
typedef pair<int, int> PII;
#define int ll

#ifdef LOCAL_MACHINE
	#define debug(format, arg...) printf(format, ##arg)
	#define debug_info(format, ...) printf("\033[1m\033[45;33m Info:[%s:%s(%d)]: \033[0m" format "\n", __FILE__, __FUNCTION__, __LINE__, ##__VA_ARGS__);
#else
	#define debug(format, arg...);
	#define debug_info(format, ...)
#endif

#define zassert(x, s) \
	do { if ((x) == 0) { printf("%s\n", s); assert((x)); } } while (0)


const int N = 1e6 + 10;
// https://www.luogu.com.cn/problem/P3469

int n,m;
struct Edge {
    int to, next;
} e[N << 1];
int head[N];
void add(int u, int v){
    static int idx = 0;
    e[++idx] = (Edge){v, head[u]};
    head[u] = idx;
}
//
int dfn[N], low[N], siz[N], dfncnt;
bool res[N];
int ans[N];
void tarjan(int u, bool root){
    dfn[u] = low[u] = ++dfncnt;
    ans[u] = 0;
    int son = 0;
    siz[u] = 1;
    int sum = 0;
    for(int i = head[u];i;i = e[i].next){
        int v = e[i].to;
        if(!dfn[v]){
            son ++;
            tarjan(v, false);
            low[u] = min(low[u], low[v]);
            siz[u] += siz[v];
            if(low[v] >= dfn[u]) {
                res[u] = true;
                sum += siz[v];
                ans[u] += siz[v] * (n - siz[v]);
            }
        }else low[u] = min(low[u], dfn[v]);
    }
    if(son >= 2 && root) res[u] = true;
    if(son < 2 && root) res[u] = false;
    if(res[u]) ans[u] += (n - sum - 1) * (sum + 1) + (n - 1);
}

void solve(){
    cin >> n >> m;
    for(int i = 0, u, v;i <= m;i++){
        cin >> u >> v;
        add(u,v);
        add(v,u);
    }
    for(int i = 1;i <= n;i++) if(!dfn[i]) tarjan(i, true);
    for(int i = 1;i <= n;i++){
        if(res[i]){
            cout << ans[i] << endl;
        }else{
            cout << 2 * (n - 1) << endl;
        }
    }
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
    