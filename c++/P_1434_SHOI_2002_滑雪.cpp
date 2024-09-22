#include <iostream>
using namespace std;
const int N = 1000;

int board[N][N],n,m,res;
int s[N][N];
int dx[] = {1,-1,0,0};
int dy[] = {0,0,1,-1};

int dfs(int x,int y){
    if(s[x][y]) return s[x][y];
    s[x][y] = 1;
    for(int i = 0;i < 4;i++){
        int xx = dx[i] + x;
        int yy = dy[i] + y;
        if(xx < 1 || xx > n || yy < 1 || yy > m || board[xx][yy] >= board[x][y]) continue;
        dfs(xx,yy);
        s[x][y] = max(s[xx][yy] + 1, s[x][y]);
    }
    return s[x][y];
}

int main(){
    cin >> n >> m;
    for(int i = 1;i <= n;i++){
        for(int j = 1;j <= m;j++){
            cin >> board[i][j];
        }
    }
    for(int i = 1;i <= n;i++){
        for(int j = 1;j <= m;j++){
            res = max(res, dfs(i,j));
        }
    }
    cout << res << endl;
}