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


// https://www.luogu.com.cn/problem/P2245

const int N = 5e5 + 10;

int n, m;

struct Edge {
    int to, next;
    ll w;
    const bool operator<(const Edge & a) const {
        return w < a.w;
    }
} e[N << 1], ne[N << 1];
int head[N];
void add(int u,int v, ll w = 0){
    static int idx = 0;
    ne[++idx] = (Edge){v, head[u], w};
    head[u] = idx;
}
//
int top[N], son[N], fa[N], dep[N], siz[N], idx;
void dfs1(int u, int father){
    fa[u] = father;
    dep[u] = dep[father] + 1;
    siz[u] = 1;
    for(int i = head[u];i;i = ne[i].next){
        int v = ne[i].to;
        if(v == father) continue;
        dfs1(v, u);
        siz[u] += siz[v];
        if(siz[son[u]] < siz[v]) son[u] = v;
    }
}
void dfs2(int u, int t){
    top[u] = t;
    if(!son[u]) return;
    dfs2(son[u], t);
    for(int i = head[u];i;i = ne[i].next){
        int v = ne[i].to;
        if(v == fa[u] || v == son[u]) continue;
        dfs2(v, v);
    }
}
int lca(int u, int v){
    while(top[u] != top[v]){
        if(dep[top[u]] < dep[top[v]]) swap(u, v);
        u = fa[top[u]];
    }
    return dep[u] < dep[v] ? u : v;
}
//
int p[N], tot;
ll val[N];
int find(int u){
    if(p[u] != u) p[u] = find(p[u]);
    return p[u];
}
void kr(){
    for(int i = 1;i <= (n << 1);i++) p[i] = i; // !
    sort(e + 1, e + 1 + m);
    // zassert(e[1].w > e[2].w, "sort");
    for(int i = 1;i <= m;i++){ // !
        int u = find(e[i].to);
        int v = find(e[i].next);
        ll w = e[i].w;
        if(u == v) continue;
        debug(">%d %d\n", u, v);
        p[u] = p[v] = ++tot; // !
        add(u, tot);
        add(tot, u);
        add(v, tot);
        add(tot, v);
        val[tot] = w;
    }
    for(int i = tot;i;i--){ // !
        if(!dep[i]){
            dfs1(i, 0);
            dfs2(i, i);
        }
    }
}

void solve(){
    cin >> n >> m; tot = n;
    for(int i = 1;i <= m;i++){
        cin >> e[i].to >> e[i].next >> e[i].w;
    }
    kr();
    int q; cin >> q;
    while(q--){
        int u,v; cin >> u >> v;
        if(find(u) != find(v)) cout << "impossible" << endl;
        else cout << val[lca(u, v)] << endl;
    }
    debug("tot: %d\n", tot);
    return ;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}