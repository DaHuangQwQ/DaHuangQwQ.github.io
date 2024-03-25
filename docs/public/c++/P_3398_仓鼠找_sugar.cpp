#include <iostream>
#define ll long long
using namespace std;
const int N = 100100;
int n,m;
struct edge{
    int to, next;
} e[N * 2];
int head[N],idx;
void add(int u, int v){
    ++idx;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx;
}
int fa[N],top[N],size[N],son[N],deep[N],id[N],cnt;


void dfs1(int u, int father){
    deep[u] = deep[father] + 1;
    fa[u] = father;
    size[u] = 1;
    for(int i = head[u]; i ;i = e[i].next){
        int v = e[i].to;
        if(v == father) continue;
        dfs1(v, u);
        size[u] += size[v];
        if(size[son[u]] < size[v]) son[u] = v;
    }
}
void dfs2(int u, int t){
    id[u] = ++cnt;
    top[u] = t;
    if(!son[u]) return;
    dfs2(son[u], t);
    for(int i = head[u]; i ; i = e[i].next){
        int v = e[i].to;
        if(v == fa[u] || v == son[u]) continue;
        dfs2(v, v);
    }
}

int lca(int x, int y){
    while(top[x] != top[y]){
        if(deep[top[x]] < deep[top[y]]) swap(x,y);
        x = fa[top[x]];
    }
    return deep[x] > deep[y] ? y : x; 
}

int main(){
    cin >> n >> m;
    for(int i = 1; i < n;i++){
        int u,v; cin >> u >> v;
        add(u,v);
        add(v,u);
    }
    dfs1(1,0);
    dfs2(1,1);
    for(int i = 1;i <= n;i++){
        int a,b,c,d; cin >> a >> b >> c >> d;
        int fir = max(deep[lca(a, b)], deep[lca(c, d)]);
		int sec = max(max(deep[lca(a, c)], deep[lca(a, d)]), max(deep[lca(b, c)], deep[lca(b, d)]));		
		if(sec >= fir) puts("Y");
		else puts("N");
    }
}