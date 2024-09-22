#include <vector>
#include <iostream>
using namespace std;
const int N = 20010;
struct edge{
	int y;
};
vector<edge> e[N];
int tim,dfn[N],low[N],vis[N],n,m,num,root;

void Tarjan(int x){
	int son = 0;
	dfn[x] = low[x] = ++tim;
	for(auto v : e[x]){
		int y = v.y;
		if(!dfn[y]){
			son++;
			Tarjan(y);
			low[x] = min(low[x], low[y]);
			if(dfn[x] <= low[y] && x != root){
				num += !vis[x];
				vis[x] = true;
			}
		}
		else{
			low[x] = min(low[x], dfn[y]);
		}
	}
	if(son >= 2 && x == root){
		num += !vis[x];
		vis[x] = true;
	}
}

int main(){
	cin >> n >> m;
	for(int i = 1;i <= m;i++){
		int u,v; cin >> u >> v;
		e[v].push_back(edge{u});
		e[u].push_back(edge{v});
	}
	for(int i = 1;i <= n;i++){
		if(dfn[i] == 0){
			root = i;
			Tarjan(i);
		}
	}
	cout << num << endl;
	for(int i = 1;i <= n;i++){
		if(vis[i]) cout << i << " ";
	}
	return 0;
}