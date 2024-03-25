# P_2871_USACO_07_DEC_Charm_Bracelet_S

<style scoped>
@import '/public/css/cpp.css';
</style>


```cpp
#include <iostream>
#include <algorithm>
using namespace std;
const int N = 13000;
int n,m; 
int w[N], v[N];
int f[N];
int main(){
    cin >> n >> m;
    for(int i = 1;i <= n;i++){
        cin >> w[i] >> v[i];
    }
    for(int i = 1;i <= n;i++){
        for(int j = m;j >= w[i];j--){
            f[j] = max(f[j], f[j - w[i]] + v[i]);
        }
    }
    cout << f[m] << endl;
    return 0;
}  
```
    