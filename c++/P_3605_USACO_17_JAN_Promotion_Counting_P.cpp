#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#define ll long long
#define mid ((l + r) >> 1)
using namespace std;
const int N = 100010, M = 40 * N;
int n, idx;
ll sum[M];
int ls[M],rs[N],root[M],fa[N],rt[N],res[N],vl[N],c[N],cnt;
vector<int> g[N];

void change(int &k, int l, int r, int p){
    if(!k) k = ++idx;
    sum[k]++;
    if(l == r){
        return;
    }
    if(p < mid)change(ls[k], l, mid, p);
    else change(rs[k],mid+1,r,p);
}

int merge(int x, int y){
    if(!x || !y) return x + y;
    sum[x] += sum[y];
    ls[x] = merge(ls[x],rs[y]);
    rs[x] = merge(rs[x],rs[y]);
    return x;
}

ll query(int k, int l, int r, int x, int y){
    if(x <= l && y >= r){
        return sum[k];
    }
    ll res = 0;
    if(x <= mid) res += query(ls[k],l,mid,x,y);
    if(y > mid) res += query(rs[k],mid+1,r,x,y);
    return res;
}

ll dfs(int x){
    for(int i = 0; i < g[x].size();i++){
        int y = g[x][i];
        if(y == fa[x]) continue;
        dfs(y);
        rt[x]=merge(rt[x],rt[y]);
    }
    res[x] = query(rt[x], 1, cnt, vl[x]+1, cnt);
}
int main(){
    cin >> n;
    for(int i = 1;i <= n;i++){
        cin >> vl[i];
        c[i] = vl[i];
    }
    sort(c+1,c+1+n);
    cnt=unique(c+1,c+1+n)-c-1;
    for(int i=1;i<=n;i++){
        vl[i]=lower_bound(c+1,c+1+n,vl[i])-c;
        change(rt[i],1,cnt,vl[i]);
    }
    for(int i=2;i<=n;i++){
        int xx;cin >> xx;fa[i]=xx;
        g[xx].push_back(i);
        g[i].push_back(xx);
    }
    dfs(1);
    for(int i = 1;i <= n;i++){
        cout << res[i] << endl;
    }
    return 0;
}