#include <iostream>
using namespace std;
const int N = 1e5 + 10;
int root, n;
struct node {
    int to, next, w;
}e[N<< 1], ne[N << 1];
int head[N];
void add(int u,int v, int w){
    static int idx = 1;
    e[++idx] = (node){v, head[u], w};
    head[u] = idx;
}
int cnt = 0;
void dfs(int u){
    for(int i = head[u];i;i = e[i].next){
        int v = e[i].to;
        int w = e[i].w;
       
        ne[++cnt] = (node){u, v, w};
        // cout << u << " " << v << " " << w << endl;
        if(v == -1) continue;
        dfs(v);
    }
}
int main(){
    cin >> root >> n;
    for(int i = 1;i <= n;i++){
        int u, v,w; cin >> u >> w >> v;
        add(u, v, w);
    }
    dfs(root);
    for(int i = 1, j = cnt;i <= j;i++, j--){
        // cout << ne[j].to << " " << ne[j].w << " " << ne[j].next << endl;
        printf("%05d %d %05d\n", ne[j].to, ne[j].w, ne[i].to);
        // cout << ne[i].to << " " << ne[i].w << " " << ne[i].next << endl;
        printf("%05d %d %05d\n", ne[i].to, ne[i].w, ne[j].to);
    }
        
}