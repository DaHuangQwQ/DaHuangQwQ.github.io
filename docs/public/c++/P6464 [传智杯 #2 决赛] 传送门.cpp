#include <iostream>
#include <cstring>
using namespace std;

const int N = 1010;

int n,m,ans=1e9,sum;

int dis[N][N];
int copy_dis[N][N];

int main(){
	cin >> n >> m;
	memset(dis, 0x3f, sizeof dis);
	for(int i = 1;i <= m;i++){
		int a,b,c; cin >> a >> b >> c;
		dis[a][b] = dis[b][a] = c;
	}

	for(int k = 1;k <= n; k++)
		for(int i = 1;i <= n;i++)
			for(int j = 1;j <= n;j++)
				dis[i][j] = min(dis[i][j], dis[i][k] + dis[k][j]);

	for(int k = 1;k <= n;k++){
		for(int l = k + 1;l <= n;l++){
			for(int i = 1;i <= n;i++)
				for(int j = 1;j <= n;j++)
					copy_dis[i][j] = dis[i][j];

			copy_dis[k][l] = copy_dis[l][k] = 0;

			for(int i = 1; i <=n; i++)
				for(int j = 1;j <= n;j++)
					copy_dis[i][j] = min(copy_dis[i][j], copy_dis[i][k] + copy_dis[k][j]);
			
			for(int i = 1; i <=n; i++)
				for(int j = 1;j <= n;j++)
					copy_dis[i][j] = min(copy_dis[i][j], copy_dis[i][l] + copy_dis[l][j]);
			sum = 0;
			for(int i = 1; i <=n; i++)
				for(int j = i + 1;j <= n;j++)
					sum += copy_dis[i][j];
			// cout << sum << endl;
			ans = min(ans, sum);
		}
	}
	cout << ans << endl;
	return 0;
}