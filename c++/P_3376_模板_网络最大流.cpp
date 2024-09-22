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
typedef pair<int, int> PII;
#define int long long 

#ifdef LOCAL_MACHINE
	#define debug(format, arg...) printf(format, ##arg)
	#define debug_info(format, ...) printf("\033[1m\033[45;33m Info:[%s:%s(%d)]: \033[0m" format "\n", __FILE__, __FUNCTION__, __LINE__, ##__VA_ARGS__);
#else
	#define debug(format, arg...);
	#define debug_info(format, ...)
#endif

#define zassert(x, s) \
	do { if ((x) == 0) { printf("%s\n", s); assert((x)); } } while (0)


const int N = 5e5 + 10;
// https://www.luogu.com.cn/problem/P3376

int n,m,s,t;
int flag[2510][2510];
//
struct Edge {
    int to, next;
    ll w;
} e[N << 1];
int head[N];
static int idx = 1; // [!code warning]
void add(int u, int v, int w){
    e[++idx] = (Edge) {v, head[u], w};
    head[u] = idx;
}
//
int mf[N], pre[N];
bool bfs(){
    memset(mf, 0, sizeof mf);
    queue<int> q;
    q.push(s);
    mf[s] = 0x3f3f3f3f3f3f3f3f;
    while(!q.empty()){
        int u = q.front(); // [!code warning]
        q.pop();
        for(int i = head[u];i;i = e[i].next){
            int v = e[i].to;
            int w = e[i].w;
            // cout << v << endl;
            if(mf[v] == 0 && w){
                mf[v] = min(mf[u], w);
                pre[v] = i;
                q.push(v);
                if(v == t) return true;
            }
        }
    }
    return false;
}

ll EK(){
    ll flow = 0;
    while(bfs()){
        int v = t;
        while(v != s){
            int i = pre[v];
            e[i].w -= mf[t];
            e[i^1].w += mf[t];
            v = e[i^1].to;
        }
        debug(">%d\n", mf[t]);
        flow += mf[t];
    }
    return flow;
}


void solve(){
    cin >> n >> m >> s >> t;
    for(int i = 1;i <= m;i++){
        int u,v,w; cin >> u >> v >> w;
        if(flag[u][v]==0) {  //处理重边的操作（加上这个模板题就可以用Ek算法过了） 
			add(u,v,w);
            add(v,u,0);
			flag[u][v]=idx;
		}
		else {
			e[flag[u][v]-1].w+=w;
		}
    }
    cout << EK() << endl;;
}

signed main(){
    #ifdef ONLINE_JUDGE
    // freopen("", "r", stdin);
    #endif
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}