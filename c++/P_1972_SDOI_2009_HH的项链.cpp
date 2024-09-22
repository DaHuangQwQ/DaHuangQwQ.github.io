#include <cmath>
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>
#include <queue>
#include <set>
#define ll long long
#define N 1500005
#define inf 1000000005
#define mod 1000000007
#include <map>
#define put putchar('\n')
#define re register 
using namespace std;
inline int read(){char c=getchar();int tot=1;while ((c<'0'|| c>'9')&&c!='-') c=getchar();if (c=='-'){tot=-1;c=getchar();}
int sum=0;while (c>='0'&&c<='9'){sum=sum*10+c-'0';c=getchar();}return sum*tot;}
inline void wr(int x){if (x<0) {putchar('-');wr(-x);return;}if(x>=10)wr(x/10);putchar(x%10+'0');}
inline void wrn(int x){wr(x);put;}inline void wri(int x){wr(x);putchar(' ');}
int c[N],tong[1000005],n,m,s,l,r;
int t,num;
struct xx{
    int l1,l,r,i;
    int ans1;
}z[N];
bool cmp(xx a,xx b){
    return a.l1==b.l1?(a.l1&1)?a.r<b.r:a.r>b.r:a.l1<b.l1;
}
inline void add(int x){
	num+=(++tong[c[x]]==1);
}
inline void dec(int x){
	num-=(--tong[c[x]]==0);
}
bool cmp2(xx a,xx b){
    return a.i<b.i;
}
int main(){
    //freopen(".in","r",stdin);freopen(".out","w",stdout);
    n=read();
    for (int i=1;i<=n;i++) c[i]=read();
    s=sqrt(n);m=read();
    for (int i=1;i<=m;i++){
        z[i].l=read();z[i].r=read();z[i].l1=z[i].l/s;z[i].i=i;
    }
    sort(z+1,z+m+1,cmp);
    re int l=0,r=0;
    for (int i=1;i<=m;i++){
        while (r<z[i].r) add(++r);
        while (r>z[i].r) dec(r--);
        while (l>z[i].l) add(--l);
        while (l<z[i].l) dec(l++);
        z[i].ans1=num;
    }
    sort(z+1,z+m+1,cmp2);
    for (int i=1;i<=m;i++){
    	wrn(z[i].ans1);
    }
    return 0;
}