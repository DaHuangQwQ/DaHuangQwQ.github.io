#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;
const int N = 310;
int n,m,q;
int f[N][N];
int main(){
    cin >> n >> m >> q;
    memset(f, 0x3f, sizeof f);
    for(int i =1;i <= m;i++){
        int u,v,w; cin >> u >> v >> w;
        f[u][v] = w;
    }
    for(int i = 1;i<=n;i++){
        f[i][i] = 0;
    }
    f[1][1] = 0;
    for(int k = 1; k <= n;k++){
        for(int i = 1; i<= n;i++){
            for(int j = 1;j <=n; j++){
                f[i][j] = min(f[i][j], max(f[i][k], f[k][j]));
            }
        }
    }
    for(int i = 1;i <= q;i++){
        int u,v; cin >> u >> v;
        if(f[u][v] == 0x3f3f3f3f) cout << -1 << endl;
        else cout << f[u][v] << endl;
    }
    return 0;
}