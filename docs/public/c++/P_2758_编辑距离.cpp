//https://www.luogu.com.cn/problem/P2758
#include <algorithm>
#include <iostream>
#include <string>
using namespace std;
const int N = 10000;
string a,b;
int dp[N][N];
int main(){ // （最短距离）
    cin >> a >> b;
    for(int i = 1;i <= a.size(); i++){
        dp[i][0] = i;
    }
    for(int i = 1;i <= b.size(); i++){
        dp[0][i] = i;
    }
    for(int i = 1; i <= a.size(); i++){
        for(int j = 1; j <= b.size(); j++){
            if(a[i - 1] == b[j - 1]){
                dp[i][j] = dp[i-1][j-1];
                continue;
            }
            dp[i][j] = min(min(dp[i-1][j], dp[i][j-1]), dp[i-1][j-1]) + 1;
        }
    }
    cout << dp[a.size()][b.size()] << endl;
    return 0;
}