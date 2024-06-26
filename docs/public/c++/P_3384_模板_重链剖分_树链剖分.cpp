// #include<bits/stdc++.h>
#include <iostream>
#include <algorithm>
#include <cstring>
#include <queue>
#include <vector>
using namespace std;
#define ll long long
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

int n, m, a[N], b[N];
//
struct edge {
    int to, next
} e[N << 1];
int head[N];
void add(int u, int v){
    static int idx = 0;
    e[++idx] = (edge){v, head[u]};
    head[u] = idx;
}
//
int size[N], top[N], son[N], fa[N], deep[N], id[N], idx;
void dfs1(int u, int father){
    deep[u] = deep[father] + 1;
    size[u] = 1;
    fa[u] = father;
    for(int i = head[u];i;i = e[i].next){
        int v = e[i].to;
        if(v == father) continue;
        dfs1(v, u);
        size[u] += size[v];
        if(size[son[u]] < size[v]) son[u] = v;
    }
}
void dfs2(int u, int t){
    id[u] = ++idx;
    top[u] = t;
    if(!son[u]) return;
    dfs2(son[u], t);
    for(int i = head[u];i;i = e[i].next){
        int v = e[i].to;
        if(fa[u] == v && v == son[u]) continue;
        dfs2(v, v);
    }
}
//
struct{
    int l, r;
    ll sum, add;
} tree[N << 2];
#define lson k << 1
#define rson k << 1|1
void pushup(int k){
    tree[k].sum = tree[ls].sum + tree[rs].sum;
}
void pushdown(int k){
    if(!tree[k].add) return;
    tree[lson].sum = tree[k].add * (tree[lson].r - tree[lson].l + 1);
    tree[rson].sum = tree[k].add * (tree[rson].r - tree[rson].l + 1);
    tree[lson].add = tree[rson].add = tree[k];
    tree[k].add = 0;
}
void build(int k, int l, int r){
    tree[k].l = l;
    tree[k].r = r;
    if(l == r){
        tree[k].sum = 0;
        return ;
    }
    int mid = (l + r) >> 1;
    pushdown(k);
    build(lson, l, mid);
    build(rson, mid+1, r);
    pushup(k);
}
ll query(int k,int l, int r){
    if(l <= tree[k].l && r >= tree[k].r){
        return tree[k].sum;
    }
    ll ans = 0;
    int mid = (tree[k].l + tree[k].r) >> 1;
    pushdown(k);
    if(l <= mid) ans += query(lson, l, r);
    if(r > mid) ans += query(rson, l , r);
    return ans;
}
ll queryRoad(int x, int y){
    ll ans = 0;
    while(top[x] != top[y]){
        if(deep[top[x]] < deep[top[y]]) swap(x, y);
        ans += query(1, id[top[x]], id[x]);
        x = fa[top[x]];
    }
    if(id[x] > id[y]) swap(x, y);
    ans += query(1, id[x] + 1, id[y]);
    return ans;
}
void update(int k, int l,int r,int val){
    if(l <= tree[k].l && r >= tree[k].r){
        tree[k].sum += (tree[k].r - tree[k].l + 1) * val;
        tree[k].add += val;
        return;
    }
    int mid = (tree[k].l + tree[k].r) >> 1;
    pushdown(k);
    if(l <= mid) update(lson, l, r, val);
    if(r > mid) update(rson, l, r, val);
    pushup(k);
}
void addRoad(int x,int y,int val){
    while(top[x] != top[y]){
        if(deep[top[x]] < deep[top[y]]) swap(x, y);
        update(1, id[top[x]], id[x], val);
        x = fa[top[x]];
    }
    if(deep[x] > deep[y]) swap(x, y);
    update(1, id[x] + 1, id[y], val);
}

void solve(){
    cin >> n >> m;
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