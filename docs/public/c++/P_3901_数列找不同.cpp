#include <iostream>
#include <algorithm>
#include <cmath>
#define ll long long
using namespace std;
const int N = 100010;
int n,m,a[N],ans[N], pos[N], cnt[N],res;
struct node{
    int id, l , r;
    const bool operator<(const node & a)const{
        return pos[l] < pos[a.l] ? r < a.r : l < a.l;
    }
} q[N];
inline int read()
{
    int k=0;
    char c;
    c=getchar();
    while(!isdigit(c))c=getchar();
    while(isdigit(c)){k=(k<<3)+(k<<1)+c-'0';c=getchar();}
    return k;
}
inline void add(int x){
    cnt[a[x]]++;
    if(cnt[a[x]] == 1){
        res += 1;
    }
}
inline void sub(int x){
    cnt[a[x]]--;
    if(cnt[a[x]] == 0){
        res -= 1;
    }
}
int main(){
    n = read();
    m = read();
    int size = sqrt(n);
    for(int i = 1;i <= n;i++){
        a[i] = read();
        pos[i] = i/ size;
    }
    for(int i = 1;i <= m;i++){
        q[i].l = read();
        q[i].r = read();
        q[i].id = i;
    }
    sort(q+1, q+1+m);
    for(int i = 1,l = 1, r = 0; i <= m; i++){
        while(q[i].l < l) add(--l);
        while(q[i].r > r) add(++r);
        while(q[i].l > l) sub(l++);
        while(q[i].r < r) sub(r--);
        if(res == (r-l+1))
            ans[q[i].id] = 1;
    }
    for(int i = 1;i <= m;i++){
        if(ans[i]){
            printf("Yes\n");
        }else{
            printf("No\n");
        }
    }
    return 0;
}