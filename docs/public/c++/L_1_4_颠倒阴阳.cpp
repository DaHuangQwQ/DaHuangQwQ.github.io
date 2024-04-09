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

const int N = 1e5 + 10;
// 
int n;

ll a[N], b[N];
int idx;
void solve(){
    cin >> n;
    if(n == 2){
        cout << "2147483646" << endl;
        return;
    }
    a[0] = 1;
    a[1] = 2;
    for(int i = 1; i <= 32;i++){
        a[i] = a[i - 1] * 2;
    }


    for(int i = 31;i >= 0;i--){
        if(n >= a[i]){
            n -= a[i];
            b[i] = 1;
        }
    }
    int flag = 0;
    for(int i = 31;i >= 0;i--){
        if(b[i] == 1){
            flag = 1;
        }
        if(flag){
            b[i] = !b[i];
        }
    }
    ll sum = 0;
    for(int i = 31;i >= 0;i--){
    //    cout << b[i];
        if(b[i] == 1)
            sum += a[31 - i];
    }
    cout << sum << endl;
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