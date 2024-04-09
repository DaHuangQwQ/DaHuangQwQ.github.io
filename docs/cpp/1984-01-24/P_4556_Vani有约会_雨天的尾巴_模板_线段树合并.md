# P_4556_Vani有约会_雨天的尾巴_模板_线段树合并

<style scoped>
@import '/public/css/cpp.css';
</style>


```cpp
// https://www.luogu.com.cn/problem/P4556
#include <iostream>
#include <cstring>
#include <algorithm>
#include <vector>
#define mid ((l + r) >> 1)
using namespace std;
const int N = 100005;
int n,m, res[N];
vector<int> g[N];
int fa[N][20], dep[N];
int root[N], tot;
int ls[N*50],rs[N*50],sum[N*50],typ[N*50];
void dfs(int x, int f){
    dep[x] = dep[f] + 1;
    fa[x][0] = f;
    for(int i = 1;i <= 18;i++){
        fa[x][i] = fa[fa[x][i-1]][i-1];
    }
    for(int i = 0;i < g[x].size();i++){
        int y = g[x][i];
        if(y != f)
            dfs(y, x);
    }
}
int lca(int x, int y){
    if(dep[x] < dep[y]) swap(x, y);
    for(int i = 18;~i;i--){
        if(dep[fa[x][i]] >= dep[y]) x = fa[x][i];
    }
    if(x == y) return y;
    for(int i = 18;~i;i--){
        if(fa[x][i] != fa[y][i]) x = fa[x][i], y = fa[y][i];
    }
    return fa[x][0];
}
void pushup(int u){
    if(sum[ls[u]] >= sum[rs[u]]){
        sum[u]=sum[ls[u]];
        typ[u]=typ[ls[u]];
    }else{
        sum[u]=sum[rs[u]];
        typ[u]=typ[rs[u]];
    }
}
void change(int &u, int l,int r,int p,int k){
    if(!u) u = ++tot;
    if(l==r){
        sum[u] += k;
        typ[u] = p;
        return ;
    }
    if(p <= mid) change(ls[u], l, mid, p, k);
    else change(rs[u],mid+1,r,p,k);
    pushup(u);
}
int merge(int x, int y, int l, int r){
    if(!x || !y) return x + y;
    if(l == r){
        sum[x] += sum[y];
        return x;
    }
    ls[x] = merge(ls[x],ls[y],l,mid);
    rs[x] = merge(rs[x],rs[y],mid+1,r);
    pushup(x);
    return x;
}
void dfs2(int x, int f){
    for(int i = 0;i < g[x].size();i++){
        int y = g[x][i];
        if(y == f) continue;
        dfs2(y,x);
        root[x] = merge(root[x], root[y],1, N);
    }
    res[x] = sum[root[x]] ? typ[root[x]] : 0;
}
int main(){
    cin >> n >> m;
    for(int i = 1,x,y;i < n;i++){
        cin >> x >> y;
        g[x].push_back(y);
        g[y].push_back(x);
    }
    dfs(1,0);
    for(int i = 1,x,y,z;i <= m;i++){
        cin >> x >> y >> z;
        change(root[x],1,N,z,1);
        change(root[y],1,N,z,1);
        int t=lca(x,y);
        change(root[t],1,N,z,-1);
        change(root[fa[t][0]],1,N,z,-1);
    }
    dfs2(1,0); 
    for(int i = 1;i<=n;i++){
        cout << res[i] << endl;
    }
    return 0;
}
```
    