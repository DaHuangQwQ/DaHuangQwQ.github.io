# P1550 Watering Hole G



```cpp
#include <iostream>
#include <algorithm>
using namespace std;
const int N = 50010;
struct edge{
	int u,v,w;
	const bool operator<(const edge & a)const{
		return w < a.w;
	}
}e[N];
int n,res,w[N],p[N],idx;

int find(int a){
	if(p[a] != a) p[a] = find(p[a]);
	return p[a];
}
void add(int u, int v,int w){
	++idx;
	e[idx] = edge{u,v,w};
}
int main(){
	cin >> n;
	for(int i = 1;i <= n;i++){
		int c; cin >> c;
		add(i,n+1,c);
		add(n+1,i,c);
	}
	for(int i = 1;i <= n;i++){
		for(int j = 1;j <= n;j++){
			int c; cin >> c;
			if(i < j) continue;
			add(i,j,c);
		}
	}
	for(int i = 0;i <= n;i++) p[i] = i;
	sort(e+1, e+idx+1);
	for(int i = 1;i <= idx;i++){
		int u = find(e[i].u);
		int v = find(e[i].v);
		if(p[u] != p[v]){
			p[u] = v;
			res += e[i].w;
		}
	}
	cout << res << endl;
	return 0;
}
```
    