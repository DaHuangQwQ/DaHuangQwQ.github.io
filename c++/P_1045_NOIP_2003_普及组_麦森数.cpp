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

#ifdef LOCAL_MACHINE
	#define debug(format, arg...) printf(format, ##arg)
	#define debug_info(format, ...) printf("\033[1m\033[45;33m Info:[%s:%s(%d)]: \033[0m" format "\n", __FILE__, __FUNCTION__, __LINE__, ##__VA_ARGS__);
#else
	#define debug(format, arg...);
	#define debug_info(format, ...)
#endif

#define zassert(x, s) \
	do { if ((x) == 0) { printf("%s\n", s); assert((x)); } } while (0)

const int N = 1e3 + 10;
// 
int n;
typedef vector<int> vi;
vi a(N), res(N);
int p;
vi mul(vi a, vi b){
    vi t(2*N);
    for(int i = 0; i <= N;i++){
        for(int j = 0;j <= N;j++){
            t[i + j] += a[i] * b[j];
            t[i + j + 1] += t[i + j] / 10;
            t[i + j] %= 10;
        }
    }
    return t;
}

void quick(int p){
    res[0] = 1;
    a[0] = 2;
    while(p){
        if(p & 1) res = mul(a, res);
        a = mul(a, a);
        p >>= 1;
    }
    res[0]--; // 个位修正
}

void solve(){
    cin >> n;
    cout << int(n * log10(2) + 1) << endl;
    quick(n);
    for(int i=0, k = 499; i < 10; i++){
        for(int j = 0; j < 50; j++, k--)
            cout << res[k];
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