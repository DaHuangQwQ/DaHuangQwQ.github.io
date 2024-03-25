#include <iostream>
#include <algorithm>
using namespace std;
const int N = 10010;
struct edge{
	int u,v,w;
	bool operator<(const edge & a)const {
		return w < a.w;
	}
}e[N];

int p[N],res,sum,n,m,k;

int find(int a){
	if(p[a] != a) p[a] = find(p[a]);
	return p[a];
}

int main(){
	cin >> n >> m >> k;
	for(int i = 1;i <= m;i++){
		int u,v,w; cin >> u >> v >> w;
		e[i] = edge{u,v,w};
	}
	for(int i = 0;i < n;i++) p[i] = i;
	sort(e+1, e+1+m);
	for(int i = 1;i <= m;i++){
		int u = find(e[i].u);
		int v = find(e[i].v);
		if(u != v){
			p[u] = v;
			sum++;
			res += e[i].w;
		}
		if(sum == n - k){
			cout << res << endl;
			return 0;
		}
	}
	cout << "No Answer" << endl;

	return 0;
}