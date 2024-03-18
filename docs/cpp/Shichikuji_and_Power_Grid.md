# Shichikuji_and_Power_Grid

<style>
@import '/public/css/cpp.css';
</style>


```cpp
// #include<bits/stdc++.h>
#include <iostream>
#include <assert.h>
#include <algorithm>
#include <cstring>
#include <queue>
#include <vector>
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


const int N = 2e6 + 10;
// https://www.luogu.com.cn/problem/CF1245D
int n;
int xi[N], yi[N], c[N], k[N];
//
struct Edge {
    int to, next;
    ll w;
    const bool operator<(const Edge & a) const {
        return w < a.w;
    }
} e[N << 1];
int head[N];
void add(int u,int v,ll w){
    static int idx = 0;
    e[++idx] = (Edge){v, head[u], w};
    head[u] = idx;
}
//
int p[N];
int find(int u){
    if(p[u] != u) p[u] = find(p[u]);
    return p[u];
}
//
int tot; // !
ll sum;
int s;
vector<int> ans;
vector<PII > res;
void kr(){
    for(int i = 1;i <= n;i++) p[i] = i;
    sort(e + 1, e + 1 + tot);
    for(int i = 1;i <= tot;i++){
        int u = find(e[i].to);
        int v = find(e[i].next);
        ll w = e[i].w;
        if(u == v) continue;
        if(e[i].to == 0){
            ans.push_back(e[i].next);
        }else{
            res.push_back(make_pair(e[i].to, e[i].next));
        }
        p[u] = v;
        sum += w;
        s++;
        if(s == n)break;
    }
}

void solve(){
    cin >> n;
    for(int i = 1;i <= n;i++) cin >> xi[i] >> yi[i];
    for(int i = 1;i <= n;i++) cin >> c[i];
    for(int i = 1;i <= n;i++) cin >> k[i];
    for(int i = 1;i <= n;i++){
        e[++tot] = (Edge){0, i, c[i]};
    }
    for(int i = 1;i <= n;i++){
        for(int j = i + 1;j <= n;j++){
            ll w = (k[i]+k[j]) * (abs(xi[i]-xi[j]) + abs(yi[i] - yi[j]));
            e[++tot] = (Edge){i, j, w};
        }
    }
    kr();
    cout << sum << endl;
    cout << ans.size() << endl;
    for(auto p : ans){
        cout << p << " ";
    }cout << endl;
    cout << res.size() << endl;
    for(auto p : res){
        cout << p.first << " " << p.second << endl;
    }
    return ;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}
```
    