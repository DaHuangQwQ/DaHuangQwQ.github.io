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
#define INF 1e9
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

const int N = 1e6 + 10;
// 
int n, q;
struct edge {
    int to,next;
} e[N << 1];
int head[N];
void add(int u, int v){
    static int idx = 1;
    e[++idx] = (edge){v, head[u]};
    head[u] = idx;
}

int son[N],fa[N],dep[N],sz[N],top[N],id[N],nw[N],cnt;

void dfs1(int u, int father){
    fa[u] = father;
    dep[u] = dep[father] + 1;
    sz[u] = 1;
    for(int i = head[u];i;i = e[i].next){
        int v = e[i].to;
        if(v == father) continue;
        dfs1(v, u);
        sz[u] += sz[v];
        if(sz[son[u]] < sz[v]){
            son[u] = v; 
        }
    }
}

void dfs2(int u, int t){
    id[++cnt] = u;
    top[u] = t;
    if(!son[u]) return;
    dfs2(son[u], t);  
    for(int i = head[u];i; i= e[i].next){
        int v = e[i].to;
        if(v == fa[u] || v == son[u]) continue;
        dfs2(v,v);
    }
}

int lca(int a, int b){
    while(top[a] != top[b]){
        if(dep[top[a]] < dep[top[b]]) swap(a, b);
        a = fa[top[a]];
    }
    return dep[a] < dep[b] ? a : b;
}
int father[N];



void solve(){
    int r = 5;
    cin >> n >> q;
    for(int i = 1;i < n;i++){
        int u, v; cin >> u >> v;
        father[v] = u; 
        add(u, v);
        // add(v, u);
    }
    while(father[r]){
        r = father[r];
    }
    dfs1(r, 0);
    dfs2(r, r);
    while(q--){
        int u,v; cin >> u >> v;
        int root = lca(u, v);
        int juli = dep[u] - dep[root] + dep[v] - dep[root];
        if(juli <= 4 || root == u || root == v){
            cout << "NO" << endl;
        }else {
            cout << "YES" << endl;
        }
        cout << juli << endl;
        // cout << root << endl;
    }
}

signed main(){
    #ifdef ONLINE_JUDGE
    // freopen("", "r", stdin);
    #endif
    ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){solve();}
    return 0;
}