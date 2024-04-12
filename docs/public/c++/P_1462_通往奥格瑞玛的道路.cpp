#ifdef ONLINE_JUDGE
#include<bits/stdc++.h>
#else
#include <iostream>
#include <stdio.h>
#include <assert.h>
#include <algorithm>
#include <cstring>
#include <queue>
#include <vector>
#endif
using namespace std;
#define ll long long
#define endl "\n"
#define INF 1e9
typedef pair<int, int> PII;
#define int ll

#ifdef LOCAL_MACHINE
	#define debug(format, arg...) printf(format, ##arg)
	#define debug_info(format, ...) printf("\033[1m\033[45;33m Info:[%s:%s(%d)]: \033[0m" format "\n", __FILE__, __FUNCTION__, __LINE__, ##__VA_ARGS__);
#else
	#define debug(format, arg...);
	#define debug_info(format, ...)
#endif

#define zassert(x, s) \
	do { if ((x) == 0) { printf("%s\n", s); assert((x)); } } while (0)

const int N = 1e5 + 10;
// 
int n,m,k;
struct Edge {
    int to, next, w;
}e[N << 1];
int head[N];
void add(int u, int v, int w){
    static int idx = 1;
    e[++idx] = (Edge){v, head[u], w};
    head[u] = idx;
}
bool vis[N];
int dis[N], step[N];
int city[N];

bool spfa(int c){
    if(city[1] > c){
        return false;
    }
    memset(dis, 0x3f, sizeof dis);
    memset(vis, false, sizeof vis);
    deque<int> q;
    q.push_back(1);
    dis[1] = 0;
    vis[1] = true;
    while(!q.empty()){
        int u = q.front();
        q.pop_front();
        ++step[u];
        if(step[u] > n){
            return false;
        }
        vis[u] = false;
        for(int i = head[u];i;i = e[i].next){
            int v = e[i].to;
            int w = e[i].w;
            if(city[v] > c){
                continue;
            }
            if(dis[v] > dis[u] + w){
                dis[v] = dis[u] + w;
                if(!vis[v]){
                    vis[v] = true;
                    if(!q.empty() || dis[v] > dis[q.front()]){
                        q.push_front(v);
                    }else{
                        q.push_back(v);
                    }
                }
            }
        }
    }
    // cout << dis[n] << " " << c << endl;
    return dis[n] < k;
}


void solve(){
    cin >> n >> m >> k;
    int maxr = 0;
    for(int i = 1;i <= n;i++){
        cin >> city[i];
        maxr = max(maxr, city[i]);
    }
    for(int i = 1;i <= m;i++){
        int u,v,w; cin >> u >> v >> w;
        add(u,v,w);
        add(v,u,w);
    }
    int l = 0, r = maxr + 1;
    while(l + 1 < r){
        int mid = (l + r) >> 1;
        if(spfa(mid)){
            r = mid;
        }else{
            l = mid;
        }
    }
    // cout << r << endl;
    if(!spfa(r)){
        cout << "AFK" << endl;
    }else {
        cout << r << endl;
    }
}

signed main(){
    #ifdef ONLINE_JUDGE
    // freopen("", "r", stdin);
    #endif
    ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){solve();}
    return 0;
}