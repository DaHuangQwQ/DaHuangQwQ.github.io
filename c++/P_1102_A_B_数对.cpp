#include <iostream>
#include <map>
using namespace std;
const int N = 200010;
map<long long,long long> m;
long a[N],res;
int main(){
    long long n,c; cin >> n >> c;
    for(int i = 1;i <= n;i++){
        cin >> a[i];
        m[a[i]]++;
        a[i] -= c;
    }
    for(int i = 1;i <= n;i++){
        res += m[a[i]];
    }
    cout << res << endl;
}