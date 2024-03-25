#include <iostream>
#include <algorithm>
using namespace std;
const int N = 200100;
int f[N];
int w[N];
int n,m;
int main(){
    cin >> m >> n;
    for(int i = 1;i <= n;i++){
        cin >> w[i];
    }
    for(int i = 1;i <= n;i++){
        for(int j = m; j >= w[i];j--){
            f[j] = max(f[j], f[j - w[i]] + w[i]);
        }
    }
    cout << m - f[m] << endl;
    return 0;
}