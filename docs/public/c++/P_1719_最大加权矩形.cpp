#include <iostream>
using namespace std;
const int N = 10010;
int a[N][N];
int value[N][N];
int main(){
    int n; cin >> n;
    for(int i = 1;i <= n;i++){
        for(int j = 1;j <= n;j++){
            cin >> a[i][j];
            value[i][j] = a[i][j] - value[i-1][j-1] + value[i-1][j] + value[i][j-1];
        }
    }
    int res = -1e9;
    for(int i = 1;i <= n;i++){
        for(int j = 1;j <= n;j++){
            for(int q = i;q <= n;q++){
                for(int w = j;w <= n;w++){
                    int tmp = value[q][w] - value[i-1][w] - value[q][j-1] + value[i-1][j-1];
                    res = max(res, tmp);
                }
            }
        }
    }
    cout << res << endl;
}
