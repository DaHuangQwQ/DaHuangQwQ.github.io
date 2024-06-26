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


const int N = 2e6 + 10;
// https://www.luogu.com.cn/problem/P8435
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
vector<int> dcc[N];
int cnt, root, cut[N];
void tarjan(int u){
    dfn[u] = low[u] = ++dfncnt;
    stk[++top] = u;
    instk[u] = 1;
    if(head[u] == 0){
        dcc[++cnt].push_back(u);
        return;
    }
    int son = 0;
    for(int i = head[u];i;i = e[i].next){
        int v = e[i].to;
        if(!dfn[v]){
            tarjan(v);
            low[u] = min(low[u], low[v]);
            if(low[v] >= dfn[u]){
                son++;
                if(u != root){
                    cut[u] = true;
                }
                cnt++;
                while(true){
                    int z = stk[top--];
                    dcc[cnt].push_back(z);
                    if(z == v) break;
                }
                dcc[cnt].push_back(u);
            }
        }else {
            low[u] = min(low[u], dfn[v]);
        }
    }
    if(root == u && son == 0) dcc[++cnt].push_back(u);
}


void solve(){
    cin >> n >> m;
    for(int i = 1;i <= m;i++){
        int u, v; cin >> u >> v;
        add(u, v);
        add(v, u);
    }
    for(int i = 1;i <= n;i++) if(!dfn[i]) root = i, tarjan(i);
    cout << cnt << endl;
    for(int i = 1;i <= cnt;i++){
        cout << dcc[i].size() << " ";
        for(auto p : dcc[i]){
            cout << p << " ";
        }cout << endl;
    }
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