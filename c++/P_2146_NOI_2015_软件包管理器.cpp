#include <cmath>
#include <iostream>
#include <algorithm>
#define ll long long
#define endl "\n"
using namespace std;
const int N = 200005;
int n,m,idx,head[N];
struct{
    int to, next;
} e[N << 1];
void add(int u, int v){
    e[++idx].to = v;
    e[idx].next = head[u];
    head[u] = idx;
}
//
int fa[N], son[N], deep[N], size[N], id[N], top[N], cnt;
void dfs1(int u, int father){
    fa[u] = father;
    deep[u] = deep[father] + 1;
    size[u] = 1;
    for(int i = head[u]; i; i = e[i].next){
        int v = e[i].to;
        if(v == father) continue;
        dfs1(v, u);
        size[u] += size[v];
        if(size[son[u]] < size[v]) son[u] = v;
    }
}
void dfs2(int u,int t){
    top[u] = t;
    id[u] = ++cnt;
    if(!son[u]) return;
    dfs2(son[u], t);
    for(int i = head[u]; i; i = e[i].next){
        int v = e[i].to;
        if(v == fa[u] || v == son[u]) continue;
        dfs2(v, v);
    }
}
//
struct{
    int l, r;
    ll sum, add;
} tr[N << 2];
#define lson k << 1
#define rson k << 1 | 1
void pushup(int k){
    tr[k].sum = tr[lson].sum + tr[rson].sum;
}
void pushdown(int k){
    tr[lson].sum = tr[k].add * (tr[lson].r - tr[lson].l + 1);
    tr[rson].sum = tr[k].add * (tr[rson].r - tr[rson].l + 1);
    tr[lson].add = tr[k].add;
    tr[rson].add = tr[k].add;
    tr[k].add = -1;
}
void build(int k, int l, int r){
    tr[k].l = l;
    tr[k].r = r;
    tr[k].sum = 0;
    tr[k].add = -1;
    if(l == r) {
        return;
    }
    int mid = (l + r) >> 1;
    build(lson, l, mid);
    build(rson, mid+1, r);
}
void update(int k,int l, int r, int p){
    if(tr[k].r<l||tr[k].l>r) return; //?
    if(l <= tr[k].l && r >= tr[k].r){
        tr[k].sum = (tr[k].r - tr[k].l + 1) * p;
        // cout << tr[k].sum << endl;
        tr[k].add = p;
        return;
    }
    int mid = (tr[k].l + tr[k].r) >> 1;
    if(tr[k].add != -1) pushdown(k);
    // if(l <= mid) 
    update(lson, l, r, p);
    // if(r > mid) 
    update(rson, l , r , p);
    pushup(k);
}
void change(int u, int v, int val){
    while(top[u] != top[v]){
        if(deep[top[u]] < deep[top[v]]) swap(u , v);
        update(1, id[top[u]], id[u], val);
        u = fa[top[u]];
    }
    if(deep[u] >= deep[v]) swap(u, v);
    update(1, id[u], id[v],val);
}
int main(){
    cin >> n;
    for(int i = 2;i <= n;i++){
        int u; cin >> u; ++u;
        add(u,i);
        // add(i,u);
    }
    dfs1(1,1);
    dfs2(1,1);
    build(1,1,n);
    cin >> m;
    while(m--){
        string op; cin >> op;
        int v; cin >> v; ++v;
        int t1 = tr[1].sum;
        if(op[0] == 'i'){
            change(1, v, 1);
            int t2 = tr[1].sum;
            cout << abs(t1 - t2) << endl;
            // cout << t1 << " " << t2 << endl;
        }
        if(op[0] == 'u'){
            update(1, id[v], id[v] + size[v] - 1, 0);
            int t2 = tr[1].sum;
            cout << abs(t1 - t2) << endl;
            // cout << t1 << " " << t2 << endl;
        }
    }
    return 0;
}