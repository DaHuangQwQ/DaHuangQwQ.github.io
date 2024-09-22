// https://www.luogu.com.cn/problem/P1119
#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;
const int N = 1000;
int n,m,q;
int a[N];
int f[N][N];
void update(int k){
    for(int i = 0;i < n;i++){
        for(int j = 0;j < n;j++){
            if(f[i][j] > f[i][k] + f[k][j]){
                f[j][i] = f[i][j] = f[i][k] + f[k][j];
            }
        }
    }
}
int main(){
    cin >> n >> m;
    memset(f, 0x3f, sizeof f);
    for(int i = 0;i < n;i++){
        cin >> a[i];
    }
    for(int i = 1;i <= m;i++){
        int u,v,w;
        cin >> u >> v >> w;
        f[u][v] = f[v][u] = w;
    }
    for(int i = 0;i < n;i++){
        f[i][i] = 0;
    }
    cin >> q;
    int now = 0;
    for(int i =1 ;i <= q;i++){
        int x1,x2,x3;
        cin >> x1 >> x2 >> x3;
        while(a[now] <= x3 && now < n){
            update(now);
            now++;
        }
        if(a[x1] > x3 || a[x2] > x3){
            cout << -1 << endl;
        }else{
            if(f[x1][x2] == 0x3f3f3f3f) cout << -1 << endl;
            else cout << f[x1][x2] << endl;
        }
    }
    return 0;
}