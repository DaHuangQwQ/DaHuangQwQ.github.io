# P_1879_USACO_06_NOV_Corn_Fields_G

<style scoped>
@import '/public/css/cpp.css';
</style>


```cpp
//https://www.luogu.com.cn/problem/P1879
#include <iostream>
#define ll long long
using namespace std;

int n,m, cnt;
int s[1 << 14];
int g[14];
ll f[14][1 << 14];
ll MOD = 1e8;
int main(){
    cin >> n >> m;
    for(int i = 1;i <= n;i++){
        for(int j = 1;j <= m;j++){
            int x; cin >> x;
            g[i] = (g[i] << 1) + x;
        }
    }
    for(int i = 0;i < (1 << m);i++){ // 处理行
        if(!(i & i >> 1)){
            s[cnt++] = i;
        }
    }
    f[0][0] = 1;
    for(int i = 1; i <= n + 1; i++){ // 处理列
        for(int a = 0; a < cnt;a++){
            for(int b = 0; b < cnt; b++){
                if((s[a] & g[i]) == s[a] && !(s[a]&s[b])){
                    f[i][a] = (f[i-1][b] + f[i][a]) % MOD;
                }
            }
        }
    }
    cout << f[n+1][0] << endl;
    return 0;
}
```
    