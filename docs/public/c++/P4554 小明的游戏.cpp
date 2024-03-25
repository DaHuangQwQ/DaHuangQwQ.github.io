#include <iostream>
#include <deque>
#include <cstring>
#include <vector>
using namespace std;
const int N = 1010;

struct node{int x,y;};
int board[N][N];
int n,m,e[N][N];
bool vis[N][N];
int dx[4] = {1,-1,0,0};
int dy[4] = {0,0,1,-1};

void bfs(int x0, int y0){
	memset(vis, false, sizeof vis);
	memset(e, 0x3f, sizeof e);
	deque<node> q;
	q.push_back(node{x0,y0});
	// vis[x0][y0] = true;
	e[x0][y0] = 0;
	while(!q.empty()){
		int x = q.front().x;
		int y = q.front().y;
		q.pop_front();
		if(vis[x][y]) continue;
		vis[x][y] = true;
		for(int i = 0;i < 4;i++){
			int nx = x + dx[i];
			int ny = y + dy[i];
			if(nx < 1 || nx > n || ny < 1 || ny > m) continue;
			int w = board[nx][ny] != board[x][y];
			if(e[nx][ny] <= e[x][y] + w) continue;
			e[nx][ny] = e[x][y] + w;

			if(w == 0) q.push_front(node{nx,ny});
			else q.push_back(node{nx,ny});
		}
	}
}

int main(){
	do{
		cin >> n >> m;
	 	if (n == 0 && m == 0)
        	break; 
		for(int i = 1;i <= n;i++){
			string str;
			cin >> str;
			for(int j = 1;j <= m;j++){
				if(str[j-1] == '@')
					board[i][j] = 1;
				else
					board[i][j] = 0;
			}
		}
		// cout << endl;
		int x1,y1,x2,y2; cin >> x1 >> y1 >> x2 >> y2;
		x1++;x2++;y1++;y2++;
		bfs(x1,y1);
		cout << e[x2][y2] << endl;
	}while(n != 0 || m != 0);



	return 0;
}