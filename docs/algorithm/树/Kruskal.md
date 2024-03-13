# 克鲁斯卡尔最小生成树

> 给出一颗带权的树，删除任意条边，求出使得给定的点不连通的最小权值。
> 用到了并查集

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;
const int N = 100010;
struct edge{
	int u,v,w;
	const bool operator<(const edge & a) const{
		return w > a.w;
	}
}e[N];
long long n,m,tot,sum,res,p[N];
bool vis[N];

int find(int a){
	if(p[a] != a) p[a] = find(p[a]);
	return p[a];
}

int main(){
	cin >> n >> m;
	for(int i = 0; i < m;i++){
		int u; cin >> u;
		vis[u] = true; // 规避的节点
	}
	for(int i = 1;i < n;i++){
		int u,v,w; cin >> u >> v >> w;
		e[i] = edge{u,v,w};
		tot += w; // res = tot - sum
	}
	for(int i = 0;i <= n;i++) p[i] = i;
	sort(e+1, e+n);
	for(int i = 1;i < n;i++){	
		int u = find(e[i].u);
		int v = find(e[i].v);
		if(vis[u] && vis[v]) continue;
		if(u != v){
			p[u] = v;
		}
		sum += e[i].w;
		if(vis[u]) vis[v] = true; // 标记一对相互连接的节点，以确保它们被同时处理或不被同时处理
		if(vis[v]) vis[u] = true;
	}
	cout << tot - sum << endl;
	return 0;
}
```



## Kruskal重构树

> ##### **Kruskal重构树—性质**
>
> 1.是一个**小/大根堆**(由建树时**边权的排序方式**决定)
> 2.**LCA(u,v)的权值**是 **原图** u到v路径上**最大/小边权的最小/大值**(由建树时**边权的排序方式**决定)

```cpp
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
```





## 超级源点

```cpp
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


const int N = 2e6 + 10;
// https://www.luogu.com.cn/problem/CF1245D
int n;
int xi[N], yi[N], c[N], k[N];
//
struct Edge {
    int to, next;
    ll w;
    const bool operator<(const Edge & a) const {
        return w < a.w;
    }
} e[N << 1];
int head[N];
void add(int u,int v,ll w){
    static int idx = 0;
    e[++idx] = (Edge){v, head[u], w};
    head[u] = idx;
}
//
int p[N];
int find(int u){
    if(p[u] != u) p[u] = find(p[u]);
    return p[u];
}
//
int tot; // !
ll sum;
int s;
vector<int> ans;
vector<PII > res;
void kr(){
    for(int i = 1;i <= n;i++) p[i] = i;
    sort(e + 1, e + 1 + tot);
    for(int i = 1;i <= tot;i++){
        int u = find(e[i].to);
        int v = find(e[i].next);
        ll w = e[i].w;
        if(u == v) continue;
        if(e[i].to == 0){
            ans.push_back(e[i].next);
        }else{
            res.push_back(make_pair(e[i].to, e[i].next));
        }
        p[u] = v;
        sum += w;
        s++;
        if(s == n)break;
    }
}

void solve(){
    cin >> n;
    for(int i = 1;i <= n;i++) cin >> xi[i] >> yi[i];
    for(int i = 1;i <= n;i++) cin >> c[i];
    for(int i = 1;i <= n;i++) cin >> k[i];
    for(int i = 1;i <= n;i++){
        e[++tot] = (Edge){0, i, c[i]};
    }
    for(int i = 1;i <= n;i++){
        for(int j = i + 1;j <= n;j++){
            ll w = (k[i]+k[j]) * (abs(xi[i]-xi[j]) + abs(yi[i] - yi[j]));
            e[++tot] = (Edge){i, j, w};
        }
    }
    kr();
    cout << sum << endl;
    cout << ans.size() << endl;
    for(auto p : ans){
        cout << p << " ";
    }cout << endl;
    cout << res.size() << endl;
    for(auto p : res){
        cout << p.first << " " << p.second << endl;
    }
    return ;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}
```

