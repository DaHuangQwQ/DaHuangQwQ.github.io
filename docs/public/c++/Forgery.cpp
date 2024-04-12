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
int n, m;
char board[N][N];
int res[N][N];

int dx[] = {1,0,1,-1,-1,0,1,-1};
int dy[] = {1,1,0,-1,0,-1,-1,1};

void solve(){
    cin >> n >> m;
    for(int i = 1;i <= n;i++){
        string str; cin >> str;
        for(int j = 1;j <= m;j++){
            board[i][j] = str[j-1];
            res[i][j] = '.';
        }
    }
    for(int i = 2; i <= n - 1;i++){
        for(int j = 2;j <= m-1;j++){
            int flag = 1;
            for(int k = 0;k < 8;k++){
                int x = dx[k] + i;
                int y = dy[k] + j;
                if(board[x][y] != '#'){
                    flag = 0;
                    break;
                }
            }
            if(flag){
                for(int k = 0;k < 8;k++){
                    int x = dx[k] + i;
                    int y = dy[k] + j;
                    res[x][y] = '#';
                }
            }
        }
    }
    for(int i = 1;i <= n;i++){
        for(int j = 1;j <= m;j++){
            if(res[i][j] != board[i][j]){
                cout << "NO" << endl;
                return;
            }
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
    // cin >> n;
    while(n--){solve();}
    return 0;
}