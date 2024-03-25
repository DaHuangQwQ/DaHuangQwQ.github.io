// #include<bits/stdc++.h>
#include <iostream>
#include <math.h>
#define ll long long
using namespace std;
const int N = 1e5 + 10;


void solve(){
    int n,x; cin >> n >> x;
    ll res;
    if(x % 2 == 1) res = x * pow(2, (n-2));
    else{
        ll sum = 2, nx = x;
        while(nx % 2 == 0 && sum < n){
            nx /= 2; 
            sum++;
        }
        res = nx * pow(2, (n-2));
    }
    cout << res << endl;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    int n = 1;
    cin >> n;
    while(n--){
        solve();
    }
    return 0;
}