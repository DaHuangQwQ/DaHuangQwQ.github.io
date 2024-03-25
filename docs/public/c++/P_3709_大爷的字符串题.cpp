#include <iostream>
#include <algorithm>
#include <cmath>
#define IOS ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
#define ll long long
#define endl "\n"
inline bool max(int i, int j){
    return i < j ? j : i;
}
using namespace std;
const int N = 100010;
ll res;
int n,m, a[N], pos[N], cnt[N], ans[N],t[N];
struct node{
    int id, l , r;
    const bool operator<(const node a) const{
        return pos[l] == pos[a.l] ? pos[r] < pos[a.l] : pos[l] < pos[a.l];
    }
} q[N];

void add(int i){
	t[cnt[a[i]]]--;
	t[++cnt[a[i]]]++;
	res=max(res,cnt[a[i]]);
}
void sub(int i){
	t[cnt[a[i]]]--;
	if(cnt[a[i]]==res&&!t[cnt[a[i]]])res--;
	t[--cnt[a[i]]]++;
}
int main(){
    IOS
    cin >> n >> m;
    int size = sqrt(n);
    for(int i = 1;i <= n;i++){
        cin >> a[i];
        pos[i] = i / size;
    }
    for(int i = 1;i <= m;i++){
        int u,v; cin >> u >> v;
        q[i] = (node){i,u,v};
    }
    sort(q+1, q+1+m);
    for(int i = 1,l = 1, r = 0;i <= m;i++){
        while(q[i].l < l) add(--l);
        while(q[i].r > r) add(++r);
        while(q[i].l > l) sub(l++);
        while(q[i].r < r) sub(r--);
        ans[q[i].id] = res;
    }
    for(int i = 1;i <=m;i++){
        cout << ans[i] << endl;
    }
}