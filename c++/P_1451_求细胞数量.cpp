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
int n,m;
int board[N][N];
int res;
bool vis[N][N];

int dx[] = {-1,0,1,0};
int dy[] = {0,-1,0,1};

void bfs(int x, int y){
    queue<pair<int, int> > q;
    q.push(make_pair(x, y));
    vis[x][y] = true;
    while(!q.empty()){
        auto t = q.front();
        q.pop();
        for(int i = 0;i < 4;i++){
            int x = dx[i] + t.first;
            int y = dy[i] + t.second;
            if(x < 1 || x > n || y < 1 || y > m || vis[x][y] == true || board[x][y] == 0) continue;
            q.push(make_pair(x, y));
            vis[x][y] = true;
        }
    }
    res++;
}

void solve(){
    cin >> n >> m;
    for(int i = 1;i <= n;i++){
        string str; cin >> str;
        for(int j = 1;j <= m;j++){
            board[i][j] = str[j-1] - '0';
        }
    }
    for(int i = 1;i <= n;i++){
        for(int j = 1;j <= m;j++){
            if(!vis[i][j] && board[i][j] != 0){
                bfs(i, j);
            }
        }
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