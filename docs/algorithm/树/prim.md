# prim最小生成树

```cpp
#include <iostream>
#include <cstring>
using namespace std;
const int N = 510;

int g[N][N],n,m;
int dis[N];
bool vis[N];

int prim(){
	memset(dis, 0x3f, sizeof dis);
	int res = 0;
	for(int i = 0;i <m;i++){
		int t = -1;
		for(int j = 1;j <= m;j++){
			if(!vis[j] && (t == -1 || dis[t] > dis[j]))
				t = j;
		}
		if(i && dis[t] == 0x3f3f3f3f) return 0x3f3f3f3f;
		if(i) res += dis[t];
		for(int j = 1;j <= m;j++){
			dis[j] = min(dis[j], g[t][j]);
		}
		vis[t] = true;
	}
	return res;
}

int main(){
	cin >> n >> m;
	for(int i = 1;i <= m;i++){
		for(int j = 1;j <= m; j++){
			cin >> g[i][j];
			if(g[i][j] == 0 || g[i][j] > n)
				g[i][j] = n;
		}
	}
	cout << n + prim() << endl;
	return 0;
}
```