#include <iostream>
#include <algorithm>
#include <queue>
#include <cstring>
#include <vector>
using namespace std;
const int N = 1000 + 10;
struct node{
    int to,cost,limit;
    bool operator<(const node & a) const{
        return cost > a.cost;
    }
};
vector<node> e[N];
int n,m,lim[N];
int dis[N];
bool vis[N];
int dijsktra(int limit){
    priority_queue<node> q;
    memset(dis, 0x3f, sizeof dis);
    memset(vis, false, sizeof vis);
    q.push((node){1, 0, limit});
    dis[1] = 0;
    while(!q.empty()){
        int u = q.top().to; q.pop();
        if(vis[u]) continue;
        vis[u] = true;
        for(int i = 0;i < e[u].size();i++){
            node v = e[u][i];
            if(v.limit >= limit && dis[v.to] > dis[u] + v.cost){
                dis[v.to] = dis[u] + v.cost;
                q.push((node){v.to, dis[v.to], limit});
            }
        }
    }
    return dis[n];
}
int main(){
    cin >> n >> m;
    int res = 0;
    for(int i = 1;i <= m;i++){
        int u,v,w,limit; cin >> u >> v >> w >> limit;
        e[u].push_back((node){v,w,limit});
        e[v].push_back((node){u,w,limit});
        lim[i] = limit;
    }
    for(int i = 1; i <= m;i++){
        res = max(res, lim[i] * int(1e6) / dijsktra(lim[i]));
    }
    cout << res << endl;
    return 0;
}