#include <iostream>
using namespace std;
const int N = 200010;
int v[N],w[N],le[N],ro[N];
int n,m,s,l,r,ans,mid;

int main(){
    cin >> n >> m >> s;
    for(int i = 1;i <= n;i++){
        cin >> w[i] << v[i];
        r = max(r, w[i]);
    }
    for(int i = 1; i <= m;i++){
        cin >> le[i] >> ri[i];
    }
    while(l <= r){
        ans = 0;
    }
}