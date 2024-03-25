#include <iostream>
#include <deque>
#include <vector>
#include <cstring>
using namespace std;
const int N = 10100;
const int M = 2 * N;
struct edge{int to,w;};

int n,m,d,f,ans;
int dis[N], step[N];
bool vis[N];
vector<edge> e[M];

int spfa(const int s){
	deque<int> q;
	memset(dis, 0, sizeof dis);
	memset(vis, false, sizeof vis);
	q.push_front(s);
	vis[s] = true;
	dis[s] = d;
	while(!q.empty()){
		int u = q.front();
		q.pop_front();
		vis[u] = false;
		++step[u];
		if(step[u] > n) {
			cout << "orz" << endl;
			exit(0);
		}
		for(auto v : e[u]){
			if(dis[v.to] < dis[u] + v.w){
				dis[v.to] = dis[u] + v.w;
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
	int res = 0;
	for(int i = 1;i <= n;i++){
		// cout << dis[i] << " ";
		res = max(res, dis[i]);
	}
	// cout << endl;
	return res;
}

int main(){
	cin >> d >> m >> n >>f;
	for(int i = 1;i <= m; i++){
		int u,v; cin >> u >> v;
		e[u].push_back(edge{v, d});
	}
	for(int i = 1;i <= f;i++){
		int u,v,w; cin >> u >> v >> w;
		e[u].push_back(edge{v, d - w});
	}
	// for(int i = 1;i <= n;i++){
	// 	// cout << "$" << spfa(i) << endl;
	// 	ans = max(ans, spfa(1));
	// }
	// if(ans == -1)
	// 	cout << "orz" << endl;
	// else
	spfa(1);
	for(int i = 1;i <= n;i++){
		ans = max(ans, dis[i]);
	}
	cout << ans << endl;
	return 0;
}