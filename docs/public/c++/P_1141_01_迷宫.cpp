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
struct node{
    int x, y, w;
};
bool vis[N][N];

int dx[] = {1,-1,0,0};
int dy[] = {0,0,1,-1};

int bfs(int x, int y){
    memset(vis, false, sizeof vis);

    int res = 1;
    queue<node> q;
    q.push((node){x,y,1});
    vis[x][y] = true;
    while(!q.empty()){
        node t = q.back();
        q.pop();
        for(int i = 0; i < 4;i++){
            int x = dx[i] + t.x;
            int y = dy[i] + t.y;
            int w = t.w;
            if(x < 1 || x > n || y < 1 || y > n || vis[x][y] == true) continue;
            if(board[x][y] == board[t.x][t.y]) continue;
            // cout << x << " " << y << " " << w << endl;
            q.push((node){x,y,w+1});
            vis[x][y] = true;
            res++;
        }
    }
    return res;
}


// int dfs(int x, int y, int d){
//     int res = d;
//     for(int i = 0;i < 4; i++){
//         int nx = dx[i] + x;
//         int ny = dy[i] + y;
//         if(nx < 1 || nx > n || ny < 1 || ny > n || vis[nx][ny] == true) continue;
//         if(board[x][y] == board[nx][ny]) continue;
//         // cout << nx << " " << ny << endl;
//         vis[nx][ny] = true;
//         res = max(dfs(nx, ny, d + 1), res);
//         vis[nx][ny] = false;
//     }
//     return res;
// }

void solve(){
    cin >> n >> m;
    for(int i = 1;i <= n;i++){
        string st; cin >> st;
        for(int j = 1;j <= n;j++){
            board[i][j] = st[j-1] - '0';
        }
    }
    while (m--) {
        int x, y; cin >> x >> y;
        cout << bfs(x, y) << endl;
        // memset(vis, false, sizeof vis);
        // vis[x][y] = true;
        // cout << dfs(x, y, 1) << endl;
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