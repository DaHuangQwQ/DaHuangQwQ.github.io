#include <iostream>
#include <queue>
#include <vector>
#include <cstring>
using namespace std;
// typedef pair<int, int> PII;

const int N = 100010;
const int M = 2 * N;

struct edge{
	int to, w;
	bool operator<(const edge& a) const{
		return w > a.w;
	}
};

vector<edge> e[M];

int n,m,ans;
int dis[N];
bool vis[N];

void add(int u,int v,int w){
	e[u].push_back(edge{v,w});
	// e[v].push_back(edge{u,w});	
}

void dijsktra(const int s){
	priority_queue<edge> q;
	memset(dis, 0x3f, sizeof dis);
	q.push(edge{s,0});
	dis[s] = 0;
	while(!q.empty()){
		int u = q.top().to;
		q.pop();
		if(vis[u]) continue;
		vis[u] = true;

		for(auto v : e[u]){
			if(dis[v.to] > dis[u] + v.w){
				dis[v.to] = dis[u] + v.w;
				q.push(edge{v.to, dis[v.to]});
			}
		}
	}
}

int main(){
	cin >> n >> m;
	for(int i = 1;i <= m; i++){
		int u,v,w; cin >> u >> v >> w;
		add(u,v,w);
		add(v+n,u+n,w);
	}
	dijsktra(1);
	for(int i = 2;i <= n;i++){
		ans += dis[i];
	}
	dijsktra(1 + n);
	for(int i = 2 + n; i <= n + n;i++){
		ans += dis[i];
	}
	cout << ans << endl;
	return 0;
}