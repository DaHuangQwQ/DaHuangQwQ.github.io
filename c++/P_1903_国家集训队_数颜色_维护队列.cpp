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

const int N = 1e6 + 10;
// 
int n, m, B;
struct Q {
    int l, r, q, t;
    bool operator<(const Q & a) const {
        if(l / B != a.l / B) return l < a.l;
        if(r / B != a.r / B) return r < a.r;
        return t < a.t;
    }
} q[N];
struct R{
    int p, c;
} re[N];
int nr, nq;
int cnt[N], sum;
int a[N];

void add(int x){
    if(!cnt[x]) sum++;
    cnt[x]++;
}

void del(int x){
    cnt[x]--;
    if(!cnt[x]) sum--;
}

int res[N];
void solve(){
    cin >> n >> m;
    B = pow(n,0.66);
    for(int i = 1;i <= n;i++){
        cin >> a[i];
    }
    for(int i = 1;i <= m;i++){
        char ch; int l, r; cin >> ch >> l >> r;
        if(ch == 'R'){
            re[++nr] = (R){l, r};
        }
        if(ch == 'Q'){
            q[++nq] = (Q){l, r, nq, nr};
        }
    }
    sort(q+1, q+nq+1);
    for(int i = 1,l = 1, r = 0, x = 0; i <= nq;i++){
        while(l > q[i].l) add(a[--l]);
        while(r < q[i].r) add(a[++r]);
        while(l < q[i].l) del(a[l++]);
        while(r > q[i].r) del(a[r--]);
        while(x < q[i].t){
            int p = re[++x].p;
            if(l <= p && p <= r)del(a[p]), add(re[x].c);
            swap(a[p], re[x].c);
        }
        while(x > q[i].t){
            int p = re[x].p;
            if(l <= p && p <= r)del(a[p]), add(re[x].c);
            swap(a[p], re[x--].c);
        }
        res[q[i].q] = sum;
    }
    for(int i = 1;i <= nq;i++){
        cout << res[i] << endl;
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