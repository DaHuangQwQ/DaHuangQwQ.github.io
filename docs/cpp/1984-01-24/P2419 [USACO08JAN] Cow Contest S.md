# P2419 [USACO08JAN] Cow Contest S

<style scoped>
@import '/public/css/cpp.css';
</style>


```cpp
#include <iostream>
using namespace std;

const int N = 10010;

int n, m;
int dis[N][N],ans;

int main(){
	cin >> n >> m;

	for(int i = 1;i <= m;i++){
		int a,b; cin >> a >> b;
		dis[a][b] = 1;
	}

	for(int k = 1;k <= n; k++){
		for(int i = 1;i <= n;i++){
			for(int j = 1; j <= n;j++){
				dis[i][j] = dis[i][j] || dis[i][k] && dis[k][j];
			}
		}
	}

	for(int i = 1;i <= n;i++){
		int t = 1;
		for(int j = 1;j <= n ;j++){
			if(i == j) continue;
			t = t && (dis[i][j] || dis[j][i]);
		}
		ans += t;
	}

	cout << ans << endl;
	return 0;
}
```
    