#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;
const int N = 10010;
long long a[N],n,ans;
long long m;
vector<long> ka,kb;
void dfs(int l, int r, long long sum, vector<long> &k){
    if(sum > m) return;
    if(l > r){
        k.push_back(sum);
        return;
    }
    dfs(l + 1, r, sum + a[l], k);
    dfs(l + 1, r, sum, k);
    return;
}

int main(){
    cin >> n >> m;
    int mid = n >> 1;
    for(int i = 1;i <= n;i++){
        cin >> a[i];
    }
    dfs(1, mid, 0, ka);
    dfs(mid+1, n, 0, kb);
    sort(ka.begin(), ka.end());
    for (int i = 0; i < kb.size(); i++)
		ans += upper_bound(ka.begin(), ka.end(), m-kb[i]) - ka.begin();
	//要注意upper_bound找的是严格大于M-kb[i]的第一个数，但是vector下标从0开始，所以刚刚好。 
	cout << ans << endl;
    return 0;
}