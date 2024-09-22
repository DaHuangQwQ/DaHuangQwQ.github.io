// https://www.luogu.com.cn/problem/P3919
#include <iostream>
#define ll long long
#define IOS ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
using namespace std;
const ll N = 1000010;
ll n, m, a[N];
ll root[N], tot;
ll ls[N*25], rs[N*25], val[N*25];

struct{
    ll l,r;
    ll sum,add;
} tree[4*N];
#define lson k << 1
#define rson k << 1|1

void build(ll &u, ll l, ll r){
    u = ++tot;
    if(l == r) {
        val[u] = a[l];
        return;
    }
    ll mid = (l + r) >> 1;
    build(ls[u], l, mid);
    build(rs[u], mid+1, r);
}

void change(ll &u, ll v, ll l, ll r, ll p, ll x){
    u = ++tot;
    ls[u] = ls[v];
    rs[u] = rs[v];
    val[u] = val[v];
    if(l == r){
        val[u] = x;
        return;
    }
    ll mid = (l + r) >> 1;
    if(p <= mid) change(ls[u], ls[v], l, mid, p, x);
    else change(rs[u], rs[v], mid+1, r, p , x);
}

ll query(ll u, ll l,ll r,ll p){
    if(l == r){
        return val[u];
    }
    ll mid = (l + r) >> 1;
    if(p <= mid) return query(ls[u],l,mid,p);
    else return query(rs[u],mid+1, r, p);
}

int main(){
    IOS
    cin >> n >> m;
    for(ll i = 1;i <= n;i++) cin >> a[i];
    build(root[0], 1, n);
    for(ll i = 1;i <= m;i++){
        ll ver,op,u,v; cin >> ver >> op;
        if(op == 1){
            cin >> u >> v;
            change(root[i], root[ver], 1, n, u , v);
        }else{
            cin >> u;
            root[i] = root[ver];
            cout << query(root[ver], 1, n, u) << endl;
        }
    }
}
