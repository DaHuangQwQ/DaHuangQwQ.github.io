#include <vector>
#include <iostream>
using namespace std;
const int N = 123456;
vector<int> g[N];
bool vis[N];
int res,n,m;
void dfs(int u, int k){
    vis[u] = true;
    if(k == m) return;
    for(int i = 0;i < g[u].size();i++){
        if(!vis[g[u][i]]){
            dfs(g[u][i], k + 1);
            res++;
        }
    }
}
int main(){
    cin >> n >> m;
    for(int i = 1;i < n;i++){
        int u,v; cin >> u >> v;
        g[u].push_back(v);
        g[v].push_back(u);
    }
    dfs(1,0);
    cout << res << endl;
    return 0;
}