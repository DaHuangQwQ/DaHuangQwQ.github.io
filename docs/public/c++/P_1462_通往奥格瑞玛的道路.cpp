#include <iostream>
#include <cstring>
#include <algorithm>
#include <queue>
#include <vector>
#define max(x, y) x < y ? y : x
#define ll long long
using namespace std;
const int N = 10010;
int n,m,k;
ll val[N];
vector<pair<ll, int> > e[N];
priority_queue<pair<ll, int> > q;
int dis[N];
bool vis[N];

int dijsktra(int x){
    if(val[1] > x) return 0;
    memset(dis, 0x3f, sizeof dis);
    memset(vis, false, sizeof vis);
    dis[1] = 0;
    q.push(make_pair(1, 1));
    while(!q.empty()){
        int u = q.top().second; q.pop();
        if(vis[u]) continue;
        vis[u] = true;
        for(int i = 0;i < e[u].size();i++){
            int v = e[u][i].first;
            if(val[v] > x) continue;
            ll w = e[u][i].second;
            if(dis[v] > dis[u] + w){
                dis[v] = dis[u] + w;
                q.push(make_pair(-dis[v], v));
                if(v == n){
                    if(dis[v] > k){
                        return 0;
                    }else{
                        return 1;
                    }
                }
            }
        }
    }
    return 0;
}
int main(){
    int maxr = 0;
    cin >> n >> m >> k;
    for(int i = 1; i <= n;i++){
        cin >> val[i];
        maxr = max(maxr, val[i]);
    }
    for(int i = 1;i <= m;i++){
        int u,v,w; cin >> u >> v >> w;
        e[u].push_back(make_pair(v,w));
        e[v].push_back(make_pair(u,w));
    }
    ll res = -1, l = 1, r = maxr;
    while(l <= r){
        int mid = (l + r) >> 1;
        if(dijsktra(mid)) res = mid, r = mid - 1;
        else l = mid + 1;
    }
    if(res == -1){
        cout << "AFK" << endl;
    }else{
        cout << res << endl;
    }
    return 0;
}