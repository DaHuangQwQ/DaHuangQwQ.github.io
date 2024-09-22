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
const int MOD = 1000000007;
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
ll n, k;
struct matrix{
    ll c[101][101];
    matrix(){memset(c, 0, sizeof c);}
} a, res;

matrix operator*(matrix &x, matrix &y){
    matrix t;
    for(int i = 1; i <= n;i++){
        for(int j = 1;j <= n;j++){
            for(int k = 1; k <= n;k++){
                t.c[i][j] = (t.c[i][j] + x.c[i][k] * y.c[k][j]) % MOD;
            }
        }
    }
    return t;
}

void quick(ll p){
    for(int i = 1;i <= n;i++) res.c[i][i] = 1;
    while(p){
        if(p & 1) res = res * a;
        a = a * a;
        p >>= 1;
    }
}

void solve(){
    cin >> n >> k;
    for(int i = 1;i <= n;i++){
        for(int j = 1;j <= n;j++){
            cin >> a.c[i][j];
        }
    }
    quick(k);
    for(int i = 1;i <= n;i++){
        for(int j = 1;j <= n;j++){
            cout << res.c[i][j] << " ";
        }
        cout << endl;
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