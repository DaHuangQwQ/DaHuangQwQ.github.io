#include <iostream>
#include <cmath>
#include <algorithm>
#define ll long long
#define endl "\n"
using namespace std;
const int N = 200010;
int n, idx, head[N], a[N], b[N];
//
struct{
    int to, next, w;
} e[N << 1];
void add(int u, int v, int w){
    e[++idx].to = v;
    e[idx].w = w;
    b[idx] = w;
    e[idx].next = head[u];
    head[u] = idx;
}
//
int fa[N],son[N],deep[N],size[N],top[N],id[N],cnt, nval[N];
void dfs1(int u, int father){
    fa[u] = father;
    deep[u] = deep[father] + 1;
    size[u] = 1;
    for(int i = head[u]; i ; i = e[i].next){
        int v = e[i].to;
        if(v == father) continue;
        a[v] = b[i];
        dfs1(v, u);
        size[u] += size[v];
        if(size[son[u]] < size[v]) son[u] = v;
    }
}
void dfs2(int u, int t){
    top[u] = t;
    id[u] = ++cnt;
    nval[cnt] = u;
    if(!son[u]) return;
    dfs2(son[u], t);
    for(int i = head[u];i; i = e[i].next){
        int v = e[i].to;
        if(v == fa[u] || v == son[u]) continue;
        dfs2(v, v);
    }
}
//
struct{
    int l, r;
    ll sum, add;
}tr[N<<2];
#define lson k << 1
#define rson k << 1|1
void pushup(int k){
    tr[k].sum = max(tr[lson].sum , tr[rson].sum);
}
void build(int k, int l, int r){
    tr[k].l = l;
    tr[k].r = r;
    if(l == r){
        tr[k].sum = a[nval[l]];
        return;
    }
    int mid = (l + r) >> 1;
    build(lson, l, mid);
    build(rson, mid+1, r);
    pushup(k);
}
void changePoint(int k, int l, int r, int x, int val){
    if(l == r){
        tr[k].sum = val;
        return;
    }
    int mid = (l + r) >> 1;
    if(x <= mid) changePoint(lson, l , mid, x, val);
    else changePoint(rson, mid+1 , r, x, val);
    pushup(k);
}
int query(int k, int l, int r){
    if(l <= tr[k].l && r >= tr[k].r){
        return tr[k].sum;
    }
    int res = 0;
    int mid = (tr[k].l + tr[k].r) >> 1;
    if(l <= mid) res = max(res,query(lson, l, r));
    if(r > mid) res = max(res, query(rson, l, r));
    return res;
}
int queryRoad(int x, int y){
    int res = 0;
    while(top[x] != top[y]){
        if(deep[top[x]] < deep[top[y]]) swap(x, y);
        res = max(res, query(1, id[top[x]], id[x]));
        x = fa[top[x]];
    }
    if(deep[x] > deep[y]) swap(x, y);
    res = max(res, query(1, id[x], id[y]));
    return res;
}
int main(){
    cin >> n;
    for(int i = 1;i < n;i++){
        int u,v,w; cin >> u >> v >> w;
        add(u, v, w);
        add(v, u, w);
    }
    dfs1(1,0);
    dfs2(1,1);
    build(1,1,n);
    while(true){
        string op; cin >> op;
        if(op == "DONE") break;
        int u,v; cin >> u >> v;
        if(op == "QUERY"){
            if(u == v)
                cout << 0 << endl;
            else
                cout << queryRoad(u, v) << endl;
        }
        if(op == "CHANGE"){
            changePoint(1,1,n,id[u],v);
        }
    }
    return 0;
}