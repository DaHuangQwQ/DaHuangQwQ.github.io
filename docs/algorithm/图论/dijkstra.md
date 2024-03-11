# dijkstra

> 堆优化的 dijkstra 算法

```cpp
#include <vector>
#include <iostream>
#include <queue>
#include <cstring>
using namespace std;

typedef pair<int,int> PII;
const int N = 100010;
const int M = 2 * N;

struct edge{
	int v, w ,next;
} e[M];

int n,m,s;

int head[N];
bool vis[N];
int dis[N];

void add(int u, int v, int w){
	static int cnt = 0;
	e[++cnt] = (edge){v , w , head[u]};
	head[u] = cnt;
}

priority_queue<PII, vector<PII>, greater<PII>> q;

void dijkstra(){
	memset(dis, 0x3f, sizeof dis);
	q.push({0,s});
	dis[s] = 0;
	while(!q.empty()){
		int u = q.top().second;
		int d = q.top().first;
		q.pop();
		if (d!=dis[u]) continue;
		for (int i=head[u];i;i=e[i].next) {
			int v=e[i].v,w=e[i].w;
			if (dis[u]+w<dis[v]) dis[v]=dis[u]+w,q.push({dis[v],v});
		}
	}
}


int main(){
	cin >> n >> m >> s;
	while(m--){
		int a,b,c; cin >> a >> b >> c;
		add(a,b,c);
	}
	dijkstra();
	for(int i = 1;i <= n;i++){
		printf("%d%c",dis[i]," \n"[i==n]);
	}
	return 0;
}

```