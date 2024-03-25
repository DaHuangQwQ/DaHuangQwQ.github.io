# P_6098_USACO_19_FEB_Cow_Land_G

<style scoped>
@import '/public/css/cpp.css';
</style>


```cpp
#include <iostream>
#include <algorithm>
#include <cstring>
#define ll long long
using namespace std;
const int N = 1e5 + 100;
int n,m;
int a[N],b[N];
//
struct{
    int to,next;
}e[N << 2];
int head[N],idx;
void add(int u,int v){
    e[++idx].to = v;
    e[idx].next = head[u];
    head[u] = idx;
}
//
int fa[N],son[N],siz[N],dep[N],id[N],top[N],tot;
void dfs1(int x, int father){
    fa[x] = father;
    siz[x] = 1;
    dep[x] = dep[father] + 1;
    for(int i = head[x];i;i = e[i].next){
        int y = e[i].to;
        if(y == father) continue;
        dfs1(y, x);
        siz[x] += siz[y];
        if(siz[son[x]] < siz[y]) son[x] = y;
    }
}
void dfs2(int x, int k){
    top[x] = k;
    id[x] = ++tot;
    a[tot] = b[x];
    if(!son[x]) return;
    dfs2(son[x], k);
    for(int i = head[x];i;i = e[i].next){
        int y = e[i].to;
        if(y == fa[x] || y == son[x]) continue;
        dfs2(y, y);
    }
}
//
struct{
    int l,r;
    int sum;
} tr[N << 2];
#define lson k << 1
#define rson k << 1 | 1
#define mid ((l + r) >> 1)
void pushup(int k){
    tr[k].sum = tr[lson].sum ^ tr[rson].sum;
}
void build(int k, int l, int r){
    if(l == r){
        tr[k].sum = a[l];
        return;
    }
    build(lson, l, mid);
    build(rson, mid+1, r);
    pushup(k);
}
void changePoint(int k, int l, int r, int p, int val){
    if(l == r){
        tr[k].sum = val;
        return ;
    }
    if(p <= mid) changePoint(lson,l,mid,p,val);
    else changePoint(rson,mid+1,r,p,val);
    pushup(k);
}
int query(int k, int l, int r, int x, int y){
    if(x <= l && y >= r){
        return tr[k].sum;
    }
    int res = 0;
    if(x <= mid) res ^= query(lson,l,mid,x,y);
    if(y > mid) res ^= query(rson,mid+1,r,x,y);
    return res;
}
int query_path(int x, int y){
    int res = 0;
    while(top[x] != top[y]){
        if(dep[top[x]] < dep[top[y]]) swap(x, y);
        res ^= query(1,1,n, id[top[x]], id[x]);
        x = fa[top[x]];
    }
    if(dep[x] > dep[y]) swap(x, y);
    res ^= query(1,1,n, id[x], id[y]);
    return res;
}
int main(){
    cin >> n >> m;
    for(int i = 1;i <= n;i++){
        cin >> b[i];
    }
    for(int i = 1,u,v;i < n;i++){
        cin >> u >> v;
        add(u,v),add(v,u);
    }
    dfs1(1,0);
    dfs2(1,1);
    build(1,1,n);
    while(m--){
        int opt,x,y; cin >> opt >> x >> y;
        if(opt == 1){
            changePoint(1,1,n,id[x], y);
        }
        if(opt == 2){
            cout << query_path(x, y) << endl;
        }
    }
    return 0;
}
```
    