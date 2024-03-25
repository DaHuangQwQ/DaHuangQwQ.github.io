#include <iostream>
#include <algorithm>
#include <cstring>
#define ll long long
#define MOD 998244353
using namespace std;
const int N = 300000 + 100;
int n,m, st[N][51], res;
struct{
    int next,to;
} e[N << 2];
int head[N], idx;
void add(int u,int v){
    e[++idx].to = v;
    e[idx].next = head[u];
    head[u] = idx;
}

inline int power(int a,int t){
    int res = 1;
    while(t){
        if(t&1) res = (ll)res*a%MOD;
        a = (ll)a*a%MOD;
        t >>= 1;
    }
    return res;
}
//
int fa[N],son[N],siz[N],dep[N],id[N],top[N],tot;
void dfs1(int x, int father){
    siz[x] = 1;
    dep[x] = dep[father] + 1;
    fa[x] = father;
    for(int i = 0;i <= 50;i++){
        st[x][i] = st[father][i] + power(dep[x]-1,i);
        st[x][i] %= MOD;
    }
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
    if(!son[x]) return;
    dfs2(son[x], k);
    for(int i = head[x];i;i = e[i].next){
        int y = e[i].to;
        if(y == son[x] || y == fa[x]) continue;
        dfs2(y,y);
    }
}
int lca(int x, int y){
    while(top[x] != top[y]){
        if(dep[top[x]] < dep[top[y]]) swap(x, y);
        x = fa[top[x]];
    }
    if(dep[x] < dep[y]) return x;
    else return y;
}
int main(){
    cin >> n;
    for(int i = 1,u,v;i < n;i++){
        cin >> u >> v;
        add(u,v);
        add(v,u);
    }
    dfs1(1, 0);
    dfs2(1, 1);
    cin >> m;
    while(m--){
        int u,v,k; cin >> u >> v >> k;
        int f = lca(u, v);
        // cout << st[4][k] << endl;
        res = (st[u][k] + st[v][k]) % MOD;
        res -= (st[f][k] + st[fa[f]][k]) % MOD;
        res = (res + MOD) % MOD;
        cout << res << endl;
    }
    return 0;
}