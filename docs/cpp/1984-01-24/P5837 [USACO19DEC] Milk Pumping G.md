# P5837 [USACO19DEC] Milk Pumping G

<style scoped>
@import '/public/css/cpp.css';
</style>


```cpp
#include <iostream>
#include <cstring>
#include <queue>
#include <vector>
using namespace std;
// typedef pair<int,int> PII;

const int N = 20010;
const int M = 2 * N;

int n,m,ans;

struct edge{
	int to, w, limit;
	bool operator<(const edge & a) const{
		return w > a.w;
	}
};

vector<edge> e[M];

int dis[N],limit[N];
bool vis[N];


int dijkstra(const int limit){
	priority_queue<edge> q;
	memset(dis, 0x3f, sizeof dis);
	memset(vis, false, sizeof vis);

	q.push((edge){1, 0, limit});
	dis[1] = 0;

	while(!q.empty()){
		int u = q.top().to;
		q.pop();

		if(dis[u]) continue;
		dis[u] = true;

		for(auto v : e[u]){

			if(v.limit>=limit && dis[v.to]>dis[u]+v.w){//注意限制

			 	dis[v.to]=dis[u]+v.w;
			 	q.push((edge){v.to,dis[v.to],limit});

			 }
		}
	}

	// cout << dis[n] << endl;
	return dis[n];
}


int main(){
	cin >> n >> m;
	for(int i = 1;i <= m;i++){
		int u,v,w; cin >> u >> v >> w >> limit[i];
		e[u].push_back((edge){v,w,limit[i]});
		e[v].push_back((edge){u,w,limit[i]});
	}
	for(int i = 1;i <= m;i++){
		ans = max(ans, limit[i]*int(1e6)/dijkstra(limit[i]));
	}

	cout << ans << endl;

	return 0;
}
```
    