// #include<bits/stdc++.h>
#include <iostream>
#include <algorithm>
#include <cstring>
#include <queue>
#include <vector>
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


const int N = 5e6 + 10;
int n,m,k, s, t;

struct edge {
    int to;
    int next;
    int w;
} e[N << 1];
int head[N];
void add(int u,int v,int w = 0){
    static int idx = 0;
    e[++idx] = (edge){v, head[u], w};
    head[u] = idx;
}

int dis[N];
bool vis[N];

void spfa(){
    memset(dis, 0x3f, sizeof dis);
    memset(vis, 0, sizeof vis);
    deque<int> q;
    q.push_back(s);
    dis[s] = 0;
    vis[s] = true;
    while(!q.empty()){
        int u = q.front();
        q.pop_front();
        vis[u] = false;
        for(int i = head[u];i;i = e[i].next){
            int v = e[i].to;
            int w = e[i].w;
            if(dis[v] > dis[u] + w){
                dis[v] = dis[u] + w;
                if(!vis[v]){
                    vis[v] = true;
                    if(!q.empty() && vis[v] > dis[q.front()]){
                        q.push_front(v);
                    }else{
                        q.push_back(v);
                    }
                }
            }
        }
    }
}


void solve(){
    cin >> n >> m >> k >> s >> t;
    while(m--){
        int u,v,w; cin >> u >> v >> w;
        add(u,v,w);
        add(v,u,w);
        for(int i = 1;i <= k;i++){
            add(u + (i - 1) * n, v + i * n);
            add(v + (i - 1) * n, u + i * n);
            add(v + i * n, u + i * n, w);
            add(u + i * n, v + i * n, w);
        }
    }
    for(int i = 1; i <= k;i++){
        add(t + (i - 1) * n, t + i * n);
    }
    spfa();
    cout << dis[t + k * n] << endl;
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