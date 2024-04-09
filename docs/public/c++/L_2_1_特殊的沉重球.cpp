#include <iostream>
using namespace std;
const int N = 10010;

int w[N],v[N],n,m;
long long dp[N][N];
int main(){
    cin >> m >> n;
    for(int i = 1;i <= n;i++){
        cin >> w[i] >> v[i];
    }
    for(int i = 1;i <= n;i++){
        for(int j = m;j >= 0;j--){
            if(j >= w[i]){
                dp[i][j] = max(dp[i-1][j- w[i]] + v[i], dp[i-1][j]);
            }else{
                dp[i][j] = dp[i-1][j];
            }

        }
    }
    cout << dp[n][m] << endl;
    return 0;
}