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


void solve(){

    string a = "I LOVE WIT";
    for(int i = 0;i < a.size();i++){
        for(int j = i; j > 0;j--){
            cout << " ";
        }
        cout << a[i] << endl;
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