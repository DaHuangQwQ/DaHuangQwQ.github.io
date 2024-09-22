// #include<bits/stdc++.h>
#include <iostream>
#define ll long long
using namespace std;
const int N = 2e5 + 10;

int n;
ll d[N];
ll a[N];
ll res;

void solve(){
    cin >> n;
    for(int i = 1;i <= n;i++) {
        cin >> a[i];
        d[i] = a[i]; 
        d[i] += d[i-1];
    }
    for(int i = 1;i <= n;i++){
        
        res += a[i] * (d[n] - d[i]);
        
    }
    cout << res << endl;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    // cin >> n;
    while(n--){
        solve();
    }
    return 0;
}