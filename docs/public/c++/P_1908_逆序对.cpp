#include <algorithm>
#include <iostream>
#define ll long long
#define lson k << 1
#define rson k << 1|1
using namespace std;
const int N = 1000010;
int n,m,a[N],b[N];
ll res;
int sum[N << 1];

void pushup(int k){
    sum[k] = sum[lson] + sum[rson];
}
void change(int k, int l, int r, int x){ // 点修
    if(l == r){
        sum[k]++;
        return;
    }
    int mid = (l + r) >> 1;
    if(x <= mid) change(lson, l, mid , x);
    else change(rson, mid+1, r, x);
    pushup(k);
} 
ll query(int k, int l, int r, int x, int y){ // 区查
    if(x <= l && y >= r) return sum[k];
    ll ans = 0;
    int mid = (l + r) >> 1;
    if(x <= mid) ans += query(lson,l , mid, x, y);
    if(y > mid) ans += query(rson, mid+1, r,x,y);
    return ans;
}
int main(){
    cin >> n;
    for(int i = 1;i <= n;i++){
        cin >> b[i];
        a[i] = b[i];
    }
    sort(a+1, a+1+n);
    for(int i = 1;i <= n;i++){
        int id = lower_bound(a+1, a+1+n, b[i]) - a;
        change(1,1,n,id);
        res += query(1,1,n, id+1, n);
        // cout << id << " " << query(1,1,n, id+1, n) << endl;
    }
    cout << res << endl;
    return 0;
}