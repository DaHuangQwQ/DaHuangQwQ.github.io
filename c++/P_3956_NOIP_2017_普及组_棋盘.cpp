#include <iostream>
#include <queue>
#include <algorithm>
#include <cstring>
#define ll long long
using namespace std;
const int N = 1000 + 10;
int n,m;
int a[N][N], dis[N][N];
struct node{
    int x,y,color,w;
    const bool operator<(const node & a) const{
        return w > a.w;
    }
};
priority_queue<node> q;
int dx[]={0,1,0,-1,1,1,-1,-1,0,2,0,-2};//12方向及魔法代价 
int dy[]={1,0,-1,0,1,-1,1,-1,2,0,-2,0};
int dw[] = {0,0,0,0,2,2,2,2,2,2,2,2};
void bfs(){
    memset(dis, 0x3f, sizeof dis);
    dis[1][1] = 0;
    q.push((node){1, 1, a[1][1], dis[1][1]});
    while(!q.empty()){
        node t = q.top();
        q.pop();
        if(t.w > dis[t.x][t.y]) continue;
        for(int i = 0;i < 12;i++){
            int x = t.x + dx[i];
            int y = t.y + dy[i];
            int w = t.w + dw[i];
            if(x <= 0 || x > n || y <= 0 || y > n || !a[x][y]) continue;
            // cout << x << " " << y << " " << w << endl;
            if(t.color != a[x][y]) w++;
            if(dis[x][y] > w){
                dis[x][y] = w;
                q.push((node){x,y,a[x][y],w});
            }
        }
    }
}

int main(){
    cin >> n >> m;
    for(int i = 1,x,y,c; i <= m;i++){
        cin >> x >> y >> c;
        a[x][y] = c + 1;
    }
    bfs();
    // for(int i = 1;i <= n;i++){
    //     for(int j = 1; j<= n;j++){
    //         cout << dis[i][j] << " ";
    //     }
    //     cout << endl;
    // }
    if(a[n][n] == 0){
        dis[n][n] = min(dis[n-1][n], dis[n][n-1]) + 2;
        if(dis[n][n] >= 0x3f3f3f3f){
            cout << "-1" << endl;
        }else
        cout << dis[n][n] << endl;
    }
    else if(dis[n][n] >= 0x3f3f3f3f){
        cout << "-1" << endl;
    }else{
        cout << dis[n][n] << endl;
    }
    return 0;
}