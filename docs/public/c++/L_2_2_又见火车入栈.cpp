// https://www.luogu.com.cn/problem/P2709
#include <math.h>
#include <iostream>
#include <algorithm>
#define endl "\n"
#define ll long long
#define IOS ios::sync_with_stdio(false); cin.tie(0); cout.tie(0);
using namespace std;
const int N = 50101;
ll res, n, m, k, a[N], cnt[N], pos[N],ans[N];

struct Q{
    int id, l, r;
    const bool operator<(Q a) const {
        return pos[l] == pos[a.l] ? pos[r] < pos[a.r] : pos[l] < pos[a.l];
    }
} q[N];
inline void add(int x){
    if(a[x]){
        res = a[x];
    }
}
inline void sub(int x){
    // --cnt[a[x]];    
	// res -= cnt[a[x]];
    if(a[x] == 1){
        res--;
    }else{
        res++;
    }
}
int idx;
int main(){
    IOS
    cin >> n;
    // int size = max(1, sqrt(n));
    int size = sqrt(n);
    for(int i = 1;i <= n;i++){
        string str;
        cin >> str;
        if(str[0] == 'i'){
            a[i] = ++idx;
        }else {
            a[i] = 0;
        }
    }
    cin >> m;
    for(int i = 1;i <= m;i++){
        int l,r; cin >> l >> r;
        q[i] = (Q){i,l,r};
    }
    sort(q+1, q+1+m);
    for(int i = 1,l = 1,r = 0;i <= m;i++){
        l = q[i].l;
        r = q[i].r;
        for(int j = l;j <= n;j++){
            cout << a[j] << " ";
            if(a[j]){
                ans[q[i].id] = a[j];
                r--;
            }
            if(!r){
                break;
            }
        }
        cout << endl;
       
    }
    for(int i = 1;i <= m;i++){
        cout << ans[i] << endl;
    }
    return 0;
}