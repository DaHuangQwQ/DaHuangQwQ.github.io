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

const int N = 1e7 + 10;
// 
int n;
int p[N];

struct node{
    int u, v, q;
    bool operator<(const node & a) const {
        return q > a.q;
    }
} e[N];

int find(int u){
    if(u != p[u]) p[u] = find(p[u]);
    return p[u];
}

int book[N << 1], tot = -1;



void solve(){
    memset(p, 0, sizeof p);
    memset(book, 0, sizeof book);
    memset(e, 0, sizeof e);
    tot = -1;

    cin >> n;
    
    for(int i = 1;i <= n;i++){
        int u,v,q; cin >> u >> v >> q;
        e[i] = (node){u,v,q};
        book[++tot] = u;
        book[++tot] = v;
    }
    
    sort(book, book + tot);
    int r = unique(book, book + tot) - book;
    for(int i = 1;i <= n; i++){
        e[i].u = lower_bound(book, book+r, e[i].u) - book;
        e[i].v = lower_bound(book, book+r, e[i].v) - book;
    }
    for(int i = 1;i <= r;i++) p[i] = i;
    sort(e+1, e+1+n);
    // zassert(e[1].q == 1, "err");
    for(int i = 1;i <= n;i++){
        int u = find(e[i].u);
        int v = find(e[i].v);
        if(e[i].q){
            p[u] = v;
        }
        else if(u == v){
            cout << "NO" << endl;
            return;
        }
    }
    cout << "YES" << endl;
}

signed main(){
    #ifdef ONLINE_JUDGE
    // freopen("", "r", stdin);
    #endif
    ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
    int n = 1;
    cin >> n;
    while(n--){solve();}
    return 0;
}