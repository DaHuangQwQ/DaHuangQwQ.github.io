#include <iostream>
#include <math.h>
#include <algorithm>
#define IOS ios::sync_with_stdio(false); cin.tie(0); cout.tie(0);
#define endl "\n"
#define ll long long
using namespace std;
const int N = 1333333;
ll res;
int n,m, a[N], cnt[N], pos[N],cntr,cntq, ans[N];
struct node{
    int id,t,l,r;
    const bool operator<(node a) const{
        return pos[l] == pos[a.l] ? pos[r] == pos[a.r] ? t < a.t : r < a.r : l < a.l;
    }
} qq[N], qr[N];

inline void add(int x)
{
	res += !cnt[x]++;
}

inline void sub(int x)
{
	res -= !--cnt[x];
}

inline void upd(int x, int t)//upd是对于时间上的变化所造成变化的维护
{
	if (qq[x].l <= qr[t].l && qr[t].l <= qq[x].r)
	{
		sub(a[qr[t].l]);
		add(qr[t].r);
	} //如果这个修改的值在[l,r]区间内，则其变化将对答案造成影响
	swap(a[qr[t].l], qr[t].r);//因为修改后的下一次操作一定相反(即修改该位置->还原该位置->修改该位置...如此循环)，所以只需交换即可，而不需要写两个函数
}

int main(){
    IOS
    cin >> n >> m;
    int size = pow(n, 0.666);
    for(int i = 1; i <= n;i++){
        cin >> a[i];
        pos[i] = i / size;
    }
    for(int i = 1;i <= m;i++){
        char ch; int l,r; cin >> ch >> l >> r;
        if(ch == 'Q')++cntq, qq[cntq].id = cntq, qq[cntq].l = l, qq[cntq].r = r, qq[cntq].t = cntr; //询问的时间即为该询问以前已经执行了多少次修改操作
        else qr[++cntr].l = l, qr[cntr].r = r;
    }
    sort(qq + 1, qq + cntq + 1);
    for(int i = 1,l = 1,r = 0,t = 0; i <= cntq; i++){
        while (l > qq[i].l) add(a[--l]);
		while (l < qq[i].l) sub(a[l++]);
		while (r > qq[i].r) sub(a[r--]);
		while (r < qq[i].r) add(a[++r]);
		while (t < qq[i].t) upd(i, ++t);
		while (t > qq[i].t) upd(i, t--);//增加t轴上的移动
		ans[qq[i].id] = res;//得到最终答案
    }
    for(int i = 1;i <= cntq;i++){
        cout << ans[i] << endl;
    }
    return 0;
}