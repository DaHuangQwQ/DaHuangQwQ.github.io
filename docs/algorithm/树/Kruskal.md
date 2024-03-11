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