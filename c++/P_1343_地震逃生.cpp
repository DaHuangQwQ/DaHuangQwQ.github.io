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
#define int long long

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
// https://www.luogu.com.cn/problem/P1343
int n, m, s, t;
//
struct Edge {
    int to, next;
    ll w;
} e[N << 1];
int head[N];
void add(int u, int v, int w){
    static int idx = 1;
    e[++idx] = (Edge) {v, head[u], w};
    head[u] = idx;
}
//
int d[N];
bool bfs(){
    memset(d, 0, sizeof d);
    queue<int> q;
    q.push(s);
    d[s] = 1;
    while(!q.empty()){
        int u = q.front();
        q.pop();
        for(int i = head[u];i;i = e[i].next){
            int v = e[i].to;
            int w = e[i].w;
            if(d[v] == 0 && w){
                d[v] = d[u] + 1;
                q.push(v);
                if(v == t) return true;
            }
        }
    }
    return false;
}

int cur[N];
ll dfs(int u, int mf){
    if(u == t) return mf;
    ll sum = 0;
    for(int i = head[u];i;i = e[i].next){
        cur[u] = i; // [!code warning]
        int v = e[i].to;
        int w = e[i].w;
        if(d[v] == d[u] + 1 && w){
            ll f = dfs(v, min(mf, w));
            e[i].w -= f;
            e[i^1].w += f;
            sum += f;
            mf -= f;
            if(mf == 0) break;
        }
    }
    if(sum == 0) d[u] = 0;
    return sum;
}

ll dinic(){
    ll flow = 0;
    while(bfs()){
        memcpy(cur, head, sizeof head); // [!code warning]
        flow += dfs(s, 1e9);
    }
    return flow;
}
int x;
void solve(){
    cin >> n >> m >> x;
    s = 1; t = n;
    for(int i = 1;i <= m;i++){
        int u,v,w; cin >> u >> v >> w;
        add(u,v,w);
        add(v,u,0);
    }
    ll res = dinic();
    if(res == 0){
        cout << "Orz Ni Jinan Saint Cow!" << endl;
    }else
        cout << res << " " << (x - 1) / res + 1 << endl;
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