#include <iostream>
#include <cstring>
#define ll long long
using namespace std;

struct matrix{
    ll c[32][32];
    matrix(){
        memset(c, 0, sizeof(c));
    }
} A, B , res;
ll n,m,k;
ll MOD = 1e9 + 7;
matrix operator*(matrix & x, matrix & y){
    matrix t;
    for(int i = 1; i <= n;i++){
        for(int j = 1;j <= n;j++){
            for(int k = 1; k <= n;k++){
                A.c[i][j] = (A.c[i][j] + x.c[i][k] * y.c[k][j]) % MOD;
            }
        }
    }
    return t;
}
void quickpow(ll k){
    for(int i = 1;i <= n;i++) res.c[i][i] = 1;
    while(k){
        if(k & 1) res = A;
        A = A * A;
        k >>= 1;
    }
}

int main(){
    cin >> n >> m >> k;
    int t = 1 << m;
    for(int i = 0, j; i < t; i++){
        if(__builtin_popcount(i) > k) continue;
        j = i >> 1;
		// j -> i
		b.a[j][i] = 1;
		j = (i >> 1) | (1 << (m - 1));
		if (__builtin_popcount(j) <= K)
			b.a[j][i] = 1;
    }
}