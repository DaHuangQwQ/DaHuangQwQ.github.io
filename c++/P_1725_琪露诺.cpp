// https://www.luogu.com.cn/problem/P1725
#include <iostream>
#include <algorithm>
#include <deque>
#include <cstring>
using namespace std;
const int N = 1000010;
int n,l,r;
int f[N],a[N],res = -2e9;
deque<int> q;
int main(){
    cin >> n >> l >> r;
    for(int i = 0;i <= n;i++){
        cin >> a[i];
    }
    memset(f, -0x3f, sizeof f);
    f[0] = 0;
    for(int i = l; i <= n;i++){
        while(!q.empty() && f[q.back()] <= f[i - l]) q.pop_back();
        q.push_back(i - l);
        if(q.front() < i - r) q.pop_front();
        f[i] = f[q.front()] + a[i];
        if(i > n - r) res = max(res, f[i]);
    }
    cout << res << endl;
    return 0;
}