# P_3128_USACO_15_DEC_Max_Flow_P

<style scoped>
@import '/public/css/cpp.css';
</style>


```cpp
#include <vector>
#include <iostream>
using namespace std;

const int N = 500100;

vector<int> g[N];
int dp[N][30],n,m, dis[N], power[N],res;

void dfs(int u, int fa){
    dis[u] = dis[fa] + 1;
    dp[u][0] = fa;
    for(int i = 1; (1 << i) <= dis[u];i++){
        dp[u][i] = dp[dp[u][i-1]][i-1];
    }
    for(int i = 0;i < g[u].size(); i++){
        int v = g[u][i];
        if(v == fa) continue;
        dfs(v, u);
    }
}

int lca(int a, int b){
    if(dis[a] > dis[b])
        swap(a,b);
    for(int i = 20; i>=0; i--) 
        if(dis[a] <= dis[b] - (1 << i)) 
            b = dp[b][i];
    if(a==b)
        return a;
    for(int i = 20; i>=0;i--){
        if(dp[a][i] != dp[b][i]){
            a = dp[a][i];
            b = dp[b][i];
        }
    }
    return dp[a][0];
}

void get(int u, int fa){
    for(int i = 0;i < g[u].size(); i++){
        int v = g[u][i];
        if(v == fa) continue;
        get(v, u);
        power[u] += power[v];
    }
    res = max(res, power[u]);
}

int main(){
    cin >> n >> m;
    for(int i = 1;i < n;i++){
        int u,v; cin >> u >> v;
        g[u].push_back(v);
        g[v].push_back(u);
    }
    dfs(1, 0);
    while(m--){
        int a,b; cin >> a >> b;
        int lc = lca(a,b);
        ++power[a];
        ++power[b];
        --power[lc];
        --power[dp[lc][0]];
    }
    get(1, 0);
    cout << res << endl;
    return 0;
}
```
    