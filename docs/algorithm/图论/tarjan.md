# tarjan 连通图



## 割点模版

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
// https://www.luogu.com.cn/problem/P3388

int n,m;
struct Edge {
    int to, next, w;
} e[N << 1];
int head[N];
void add(int u, int v){
    static int idx = 0;
    e[++idx] = (Edge){v, head[u]};
    head[u] = idx;
}
//
int dfn[N], low[N], dn;
int res[N], cnt;
void tarjan(int u, int root){
    dfn[u] = low[u] = ++dn;
    int son = 0;
    for(int i = head[u];i;i = e[i].next){
        int v = e[i].to;
        debug(">%d %d %d\n", u, v, low[u]);
        if(!dfn[v]){
            tarjan(v, 0);
            low[u] = min(low[v], low[u]);
            if(low[v] >= dfn[u] && !root) {
                cnt += !res[u];
                res[u] = 1;
            }
            if(root) son++;

        }else{
            low[u] = min(low[u], dfn[v]);
        }
    }
    if(son >= 2 && root){
        cnt += !res[u];
        res[u] = 1;
    }
}

void solve(){
    cin >> n >> m;
    for(int i = 1;i <= m;i++){
        int u,v; cin >> u >> v;
        add(u,v);
        add(v,u);
    }
    for(int i = 1;i <= n;i++) if(!dfn[i]) tarjan(i, i);
    cout << cnt << endl;
    for(int i = 1;i <= n;i++){
        if(res[i]) cout << i << " ";
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





## 进一步理解

## 题面翻译

B 城有 $n$ 个城镇，$m$ 条双向道路。

每条道路连结两个不同的城镇，没有重复的道路，所有城镇连通。

把城镇看作节点，把道路看作边，容易发现，整个城市构成了一个无向图。

请你对于每个节点 $i$ 求出，把与节点 $i$ 关联的所有边去掉以后（不去掉节点 $i$ 本身），无向图有多少个有序点 $(x,y)$，满足 $x$ 和 $y$ 不连通。

**【输入格式】**

第一行包含两个整数 $n$ 和 $m$。

接下来 $m$ 行，每行包含两个整数 $a$ 和 $b$，表示城镇 $a$ 和 $b$ 之间存在一条道路。

**【输出格式】**

输出共 $n$ 行，每行输出一个整数。

第 $i$ 行输出的整数表示把与节点 $i$ 关联的所有边去掉以后（不去掉节点 $i$ 本身），无向图有多少个有序点 $(x,y)$，满足 $x$ 和 $y$ 不连通。



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

