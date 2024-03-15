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





## tarjan 割点

> **割点**：对于一个无向图，如果把一个点删除后，连通块的个数增加了，那么这个点就是割点（又称割项）。



> 割点判定法则：
>
> 如果 × 不是根节点，当搜索树上存在×的一个子节点y，满足low[y] ≥ dfn[x]，那么x就是割点。
>
> 如果 x 是根节点，当搜索树上存在至少两个子节点y1,y2，满足上述条件，那么×就是割点。
>
> low[y] ≥ dfn[x]，说明从 y 出发，在不通过 x 点的前提下，不管走哪条边，都无法到达比×更早访问的节点。
>
> 故删除 × 点后，以y为根的子树 subtree() 也就断开了。即环顶的点割得掉。
>
> 反之，若low[y] < dfn[x]，则说明 y 能绕行其他边到达比 × 更早访问的节点，x就不是割点了。即环内的点割不掉。



### 题面翻译

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
#define debug(format, arg...) ;
#define debug_info(format, ...)
#endif

#define zassert(x, s)          \
    do                         \
    {                          \
        if ((x) == 0)          \
        {                      \
            printf("%s\n", s); \
            assert((x));       \
        }                      \
    } while (0)

const int N = 1e5 + 10;
// https://www.luogu.com.cn/problem/P2863

int n, m, a, b;
vector<int> e[N];
int dfn[N], low[N], tot;
int stk[N], instk[N], top;
int scc[N], siz[N], cnt;

void tarjan(int x)
{
    // 入x时，盖戳、入栈
    dfn[x] = low[x] = ++tot;
    stk[++top] = x, instk[x] = 1;
    for (int y : e[x])
    {
        if (!dfn[y])
        { // 若y尚未访问
            tarjan(y);
            low[x] = min(low[x], low[y]); // 回x时更新low
        }
        else if (instk[y])                // 若y已访问且在栈中
            low[x] = min(low[x], dfn[y]); // 在x时更新low
    }
    // 离x时，收集SCC
    if (dfn[x] == low[x])
    { // 若x是SCC的根
        int y;
        ++cnt;
        do
        {
            y = stk[top--];
            instk[y] = 0;
            scc[y] = cnt; // SCC编号
            ++siz[cnt];   // SCC大小
        } while (y != x);
    }
}

void solve()
{
    cin >> n >> m;
    while (m--)
        cin >> a >> b, e[a].push_back(b);
    for (int i = 1; i <= n; i++) // 可能不连通
        if (!dfn[i])
            tarjan(i);
    int ans = 0;
    for (int i = 1; i <= cnt; i++)
        if (siz[i] > 1)
            ans++;
    cout << ans << endl;
}

signed main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    int n = 1;
    // cin >> n;
    while (n--)
    {
        solve();
    }
    return 0;
}
```



## Tarjan scc 缩点

> 把有环图抽象成无环图
>
> 缩点后观察 **入度** 和 **出度** 来构造答案
>
> 缩点后重建拓扑图，利用拓扑图递推找到答案

### 题目描述

共有 $n$ 所学校 $(1 \leq n \leq 10000)$ 已知他们实现设计好的网络共 $m$ 条线路，为了保证高速，网络是单向的。现在请你告诉他们至少选几所学校作为共享软件的母机，能使每所学校都可以用上。再告诉他们至少要添加几条线路能使任意一所学校作为母机都可以使别的学校使用上软件。

### 输入格式

第一行一个正整数 $n$。

接下来 $n$ 行每行有若干个整数，用空格隔开。

第 $i+1$ 行，每行输入若干个非零整数 $x$，表示从 $i$ 到 $x$ 有一条线路。以 $0$ 作为结束标志。

### 输出格式

第一行一个整数，表示至少选几所学校作为共享软件的母机，能使每所学校都可以用上。

第二行一个整数，表示至少要添加几条线路能使任意一所学校作为母机都可以使别的学校使用上软件。

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



每头奶牛都梦想成为牛棚里的明星。被所有奶牛喜欢的奶牛就是一头明星奶牛。所有奶牛都是自恋狂，每头奶牛总是喜欢自己的。奶牛之间的“喜欢”是可以传递的——如果 $A$ 喜欢 $B$，$B$ 喜欢 $C$，那么 $A$ 也喜欢 $C$。牛栏里共有 $N$ 头奶牛，给定一些奶牛之间的爱慕关系，请你算出有多少头奶牛可以当明星。

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



### 题目描述

给定一个 $n$ 个点 $m$ 条边有向图，每个点有一个权值，求一条路径，使路径经过的点权值之和最大。你只需要求出这个权值和。

允许多次经过一条边或者一个点，但是，重复经过的点，权值只计算一次。

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
// https://www.luogu.com.cn/problem/P3387
int n, m;
//
struct Edge{
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
int scc[N], cnt;
void tarjan(int u){
    dfn[u] = low[u] = ++dfncnt;
    stk[++top] = u;
    instk[u] = 1;
    for(int i = head[u];i;i = e[i].next){
        int v = e[i].to;
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

int w[N], nw[N], dp[N];

void solve(){
    cin >> n >> m;
    for(int i = 1;i <= n;i++) cin >> w[i];
    for(int i = 1;i <= m;i++){
        int u,v; cin >> u >> v;
        add(u, v);
    }
    for(int i = 1;i <= n;i++) if(!dfn[i]) tarjan(i);
    for(int u = 1;u <= n;u++){
        nw[scc[u]] += w[u];
        for(int i = head[u];i;i = e[i].next){
            int v = e[i].to;
            if(scc[u] == scc[v]) continue;
            nadd(scc[u], scc[v]);
        }
    }
    for(int u = cnt;u;u--){ // 思考： 为什么 cnt 开始遍历
        if(dp[u] == 0) dp[u] = nw[u];

        for(int i = nhead[u];i;i = ne[i].next){
            int v = ne[i].to;
            dp[v] = max(dp[v], dp[u] + nw[v]);
        }
    }
    int res = 0;
    for(int i = 1;i <= cnt;i++){
        res = max(res, dp[i]);
    }
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



## 割边

> 割边：对于一个无向图，如果删掉一条边后图中的连通块个数增加了，则称这条边为桥或者割边。

> 割边判定法则：
>
> 当搜索树上存在 × 的一个子节点 y，满足 low{y} > dfn[x]，则（x.y）这条边就是割边。
>
> low[y] > dfn[x]，说明从 y 出发，在不经过（x.y）这条边的前提下，不管走哪条边，都无法到达×或 更早访问的节点。
>
> 故删除（x, y）这条边，以 y 为根的子树 subtree(y) 也就断开了。即环外的边割得断。
>
> 反之，若low[y] <= dfn[x]，则说明 y 能绕行其他边到达 x 或更早访问的节点，
>
> （x.y）就不是割边了。即环内的边割不断。
