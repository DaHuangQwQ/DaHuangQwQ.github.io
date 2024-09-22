#include <deque>
#include <iostream>
#include <cstring>
using namespace std;
const int N = 1010;

struct node{int x,y;};
int dx[] = {1,1,-1,-1};
int dy[] = {1,-1,-1,1};
int ex[] = {-1,-1,0,0};
int ey[] = {-1,0,0,-1};
char es[] = "\\/\\/";
int dis[N][N],board[N][N],n,m;
bool vis[N][N];

void bfs(){
	deque<node> q;
	memset(dis, 0x3f, sizeof dis);
	q.push_back(node{0,0});
	dis[0][0] = 0;
	while(!q.empty()){
		int x = q.front().x;
		int y = q.front().y;
		q.pop_front();
		if(vis[x][y]) continue;
		vis[x][y] = true;
		for(int i = 0;i < 4;i++){
			int nx = x + dx[i];
			int ny = y + dy[i];
			int nex = x - ex[i];
			int ney = y - ey[i];
			if(nx < 0 || nx > n || ny < 0 || ny > m) continue;
			int w = (board[nex][ney] != es[i]);
			// cout << nx << " " << ny << " " << nex << " " << ney << " " << board[nex][ney] << " " << es[i] << " " << w << endl;
			if(dis[nx][ny] <= dis[x][y] + w) continue;
			dis[nx][ny] = dis[x][y] + w;
			if(board[nex][ney] == es[i]) q.push_front(node{nx,ny});
			else q.push_back(node{nx,ny});
		}
	}
}

int main(){
	cin >> n >> m;
	for(int i = 1;i <= n;i++){
		string str; cin >> str;
		for(int j = 1;j <= m;j++){
			board[i][j] = str[j-1];
		}
	}
	bfs();
	if(dis[n][m] >= 1e9)
		cout << "NO SOLUTION" << endl;
	else
		cout << dis[n][m] << endl;
	return 0;
}