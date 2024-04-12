# P_1884_USACO_12_FEB_Overplanting_S

<style scoped>
@import '/public/css/cpp.css';
</style>


```cpp
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

const int N = 2e5 + 10;
// 
int n;
struct Tree {
    int l, r;
    int cnt, len; 
} tr[N<<3];
#define lson k<<1
#define rson k<<1|1

struct Line {
    int x1, x2, y;
    int tag;
    bool operator<(const Line & a) const {
        return y < a.y;
    }
} line[N];
int X[N];

void pushup(int k){
    if(tr[k].cnt){
        tr[k].len = X[tr[k].r + 1] - X[tr[k].l];
    }else {
        tr[k].len = tr[lson].len + tr[rson].len;
    }
    // cout << "#" << tr[k].len << endl;
}

void build(int k, int l, int r){
    tr[k] = (Tree){l, r, 0, 0};
    if(l == r) return;
    int mid = (l + r) >> 1;
    build(lson, l, mid);
    build(rson, mid+1, r);
}

// void change(int k,int l,int r, int x, int y, int tag){
//     if(x > r || y < l) return;
//     if(x <= l && y >= r){
//         tr[k].cnt += tag;
//         pushup(k);
//         return;
//     }
//     int mid = (l + r) >> 1;
//     change(lson, l, mid, x, y, tag);
//     change(rson, mid+1, r, x, y, tag);
//     pushup(k);
// }

void change(int k, int l, int r, int tag){
    if(l>tr[k].r || r<tr[k].l)return;
    if(l<=tr[k].l && tr[k].r<=r){
        tr[k].cnt+=tag;
        pushup(k); //这里会爆4倍空间
        return;
    }
    change(lson,l,r,tag);
    change(rson,l,r,tag);
    pushup(k);
}

void solve(){
    cin >> n;
    for(int i = 1;i <= n;i++){
        int x1, y1, x2, y2; cin >> x1 >> y1 >> x2 >> y2;
        line[i] = (Line){x1, x2, y1, 1};
        line[i+n] = (Line){x1, x2, y2, -1};
        X[i] = x1, X[i+n] = x2;
    }
    n *= 2;
    sort(X+1, X+n+1);
    sort(line + 1, line + 1 + n);
    int r = unique(X+1, X+n+1) - X - 1;
    build(1,1,r - 1);

    // for(int i = 1;i <=r;i++){
    //     cout << line[i].x1 << " " << line[i].x2 << " " << line[i].y << endl;
    // }

    ll res = 0;
    for(int i = 1;i < n;i++){
        // cout << line[i].x1 << " " << line[i].x2 << endl;
        int x = lower_bound(X+1, X+r+1, line[i].x1) - X;
        int y = lower_bound(X+1, X+r+1, line[i].x2) - X;
        // change(1, 1, r, x, y - 1, line[i].tag);
        change(1, x, y - 1, line[i].tag);
        // cout << tr[1].len << endl;
        res += tr[1].len * (line[i+1].y - line[i].y);
    }
    cout << res << endl;
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
```
    