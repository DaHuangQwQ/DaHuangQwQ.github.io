#include <vector>
#include <iostream>
using namespace std;
const int N = 10010;
vector<int> g[N];
bool vis[N];
int n; 
void dfs(int u){
    vis[u] = true;
    for(int i = 0; i < g[u].size(); i++){
        if(vis[g[u][i]]) continue;
        
    }
}


int main(){
    cin >> n;
    for(int i = 1;i <= n;i++){
        int u,v; cin >> u >> v;
        g[u].push_back(v);
        g[v].push_back(u);
    }
    dfs(1);
    
}