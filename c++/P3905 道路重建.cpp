#include <iostream>
#include <deque>
#include <cstring>
#include <vector>
using namespace std;
const int N = 10010;
const int M = 2 * N;

struct edge{int to, w;};

int n,m,ans,dis[N],beg,en,jud[N][N];
bool vis[N];
vector<edge> e[M];

void spfa(){
	deque<int> q;
	memset(dis, 0x3f, sizeof dis);
	q.push_back(beg);
	vis[beg] = true;
	dis[beg] = 0;
	while(!q.empty()){
		int u = q.front();
		q.pop_front();
		vis[u] = false;
		for(auto v : e[u]){
			int pay = v.w;
			if(!jud[u][v.to] || !jud[v.to][u]) pay = 0; // 关键的一步
			if(dis[v.to] > dis[u] + pay){
				dis[v.to] = dis[u] + pay;
				if(!vis[v.to]){
					vis[v.to] = true;
					if(!q.empty() && dis[v.to] > dis[q.front()]){
						q.push_front(v.to);
					}else{
						q.push_back(v.to);
					}
				}
			}
		}
	}
}

int main(){

	cin >> n >> m;

	for(int i = 1;i <= m;i++){
		int u,v,w;cin >> u >> v >> w;
		e[u].push_back(edge{v,w});
		e[v].push_back(edge{u,w});
	}
	cin >> m;
	for(int i = 1;i <= m;i++){
		int u,v; cin >> u >> v;
		// e[u][v].w = 0x3f;
		// e[v][u].w = 0x3f;
		jud[u][v] = jud[v][u] = 1;
	}
	cin >> beg >> en;

	spfa();

	cout << dis[en] << endl;

	return 0;
}