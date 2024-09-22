// #include<bits/stdc++.h>
#include <iostream>
#include <algorithm>
#include <cstring>
#include <queue>
#include <vector>
#include <deque>
using namespace std;
typedef pair<int, int> PII;

#ifdef LOCAL_MACHINE
	#define debug(format, arg...) printf(format, ##arg)
	#define debug_info(format, ...) printf("\033[1m\033[45;33m Info:[%s:%s(%d)]: \033[0m" format "\n", __FILE__, __FUNCTION__, __LINE__, ##__VA_ARGS__);
#else
	#define debug(format, arg...);
	#define debug_info(format, ...)
#endif

#define zassert(x, s) \
	do { if ((x) == 0) { printf("%s\n", s); assert((x)); } } while (0)


const int N = 1e6 + 10;

int n,m,s;

struct edge{
    int to,next;
    int w;
} e[N<<1];
int head[N];
void add(int u, int v, int w){
    static int idx = 0;
    e[++idx] = (edge){v, head[u], w};
    head[u] = idx;
}

int dis[N];
bool vis[N];


priority_queue<PII, vector<PII>, greater<PII> > q;
void dij(){
    memset(dis, 0x3f, sizeof dis);
    q.push(make_pair(s, 0));
    dis[s] = 0;
    while(!q.empty()){
        int u = q.top().first;
        int d = q.top().second;
        q.pop();
        if(vis[u]) continue;
        vis[u] = true;
        if(d != dis[u]) continue;
        for(int i = head[u];i;i = e[i].next){
            int v = e[i].to;
            if(dis[v] > dis[u] + e[i].w){
                dis[v] = dis[u] + e[i].w;
                q.push(make_pair(v, dis[v]));
            }
        }
    }
}

void solve(){
    cin >> n >> m >> s;
    for(int i = 1;i <= m;i++){
        int u,v,w; cin >> u >> v >> w;
        add(u,v,w);
    }
    dij();
    for(int i = 1;i <= n;i++){
        cout << dis[i] << " ";
    }
    exit(0);
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}