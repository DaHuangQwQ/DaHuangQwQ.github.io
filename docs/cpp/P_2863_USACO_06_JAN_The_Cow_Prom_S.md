# P_2863_USACO_06_JAN_The_Cow_Prom_S

<link rel="stylesheet" href="/public/css/cpp.css">

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
    