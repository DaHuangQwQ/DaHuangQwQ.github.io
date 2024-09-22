#include <iostream>
#include <cstring>
using namespace std;

int ans[7][7] = {
    {0,0,0,0,0,0},
    {0,1,1,1,1,1},
    {0,0,1,1,1,1},
    {0,0,0,2,1,1},
    {0,0,0,0,0,1},
    {0,0,0,0,0,0}
};
int board[7][7], success;
const int dx[]={0,1,1,-1,-1,2,2,-2,-2};
const int dy[]={0,2,-2,2,-2,1,-1,1,-1};

int evaluate(){
    int cnt = 0;
    for(int i = 1;i <= 5;i++){
        for(int j = 1;j <= 5;j++){
            if(board[i][j] != ans[i][j]){
                cnt++;
            }
        }
    }
    return cnt;
}

void A_star(int deep, int x, int y, int maxDeep){
    if(deep == maxDeep){
        if(evaluate() == 0)success = 1;
        return;
    }
    if(success) return;
    for(int i = 1;i <= 8;i++){
        int nx = x + dx[i];
        int ny = y + dy[i];
        if(nx < 1 || nx > 5 || ny < 1 || ny > 5) continue;
        swap(board[x][y], board[nx][ny]);
        int eva = evaluate();
        if(eva + deep <= maxDeep) A_star(deep+1,nx,ny,maxDeep);
        swap(board[x][y], board[nx][ny]);
    }
}

int main(){
    int n; cin >> n;
    while(n--){
        success = 0;
        int x,y;
        for(int i = 1;i <= 5;i++){
            string str; cin >> str;
            for(int j = 1;j <= 5;j++){
                if(str[j-1] == '*'){
                    x = i;
                    y = j;
                    board[i][j] = 2;
                }else
                    board[i][j] = str[j-1] - '0';
            }
        }
        if(!evaluate()){
            cout << "0" << endl;
            continue;
        }
        for(int i = 1;i <= 15;i++){
            A_star(0,x,y,i);
            if(success){
                cout << i << endl;
                goto end;
            }
        }
        cout << -1 << endl;
        end:;
    }
    return 0;
}