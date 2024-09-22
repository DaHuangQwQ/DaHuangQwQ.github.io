#include <iostream>
using namespace std;
const int N = 100010;
int a[N];

int main(){
    int n; cin >> n;
    for(int i = 1;i <= n;i++){
        cin >> a[i];
        a[i] += a[i-1];
    }
    int m; cin >> m;

    for(int i = 1;i <= m;i++){
        int l,r; cin >> l >> r;
        cout << a[r] - a[l - 1] << endl;
    }
}