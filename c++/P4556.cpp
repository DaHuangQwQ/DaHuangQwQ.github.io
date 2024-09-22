#include <iostream>
#include <cstring>
#include <algorithm>
#include <vector>
using namespace std;

void read(int &x){ //快读
  x=0; char c=getchar();
  while(!isdigit(c))c=getchar();
  while(isdigit(c))x=x*10+c-'0',c=getchar();
}
const int N=100005;
#define mid ((l+r)>>1)
int n,m,ans[N];
vector<int> g[N];
int fa[N][20],dep[N];
int root[N],tot;
int ls[N*50],rs[N*50],sum[N*50],typ[N*50];
//sum:某种救济粮的数量
//typ:救济粮的类型

void dfs(int x,int f){ //树增
  dep[x]=dep[f]+1; fa[x][0]=f;
  for(int i=1; i<=18; i++)
    fa[x][i]=fa[fa[x][i-1]][i-1]; 
  for(int y:g[x])
    if(y!=f) dfs(y,x);
}
int lca(int x,int y){ //求lca
  if(dep[x]<dep[y]) swap(x,y);
  for(int i=18; ~i; i--)
    if(dep[fa[x][i]]>=dep[y])x=fa[x][i];
  if(x==y) return y;
  for(int i=18; ~i; i--)
    if(fa[x][i]!=fa[y][i])x=fa[x][i],y=fa[y][i];
  return fa[x][0];
}

void pushup(int u){ //上传
  if(sum[ls[u]]>=sum[rs[u]])
    sum[u]=sum[ls[u]], typ[u]=typ[ls[u]];
  else
    sum[u]=sum[rs[u]], typ[u]=typ[rs[u]];
}
void change(int &u,int l,int r,int p,int k){ //点修
  if(!u) u=++tot; //动态开点
  if(l==r){sum[u]+=k; typ[u]=p; return;}
  if(p<=mid) change(ls[u],l,mid,p,k);
  else change(rs[u],mid+1,r,p,k);
  pushup(u);
}
int merge(int x,int y,int l,int r){ //合并
  if(!x||!y)return x+y;//一个空,返回另一个
  if(l==r){sum[x]+=sum[y]; return x;}
  ls[x]=merge(ls[x],ls[y],l,mid);
  rs[x]=merge(rs[x],rs[y],mid+1,r);
  pushup(x);
  return x;
}
void dfs2(int x,int f){ //递归合并
  for(int y:g[x]){
    if(y==f) continue;
    dfs2(y,x);
    root[x]=merge(root[x],root[y],1,N);
  }
  ans[x]=sum[root[x]]?typ[root[x]]:0;
}
int main(){
  read(n),read(m);
  for(int i=1,x,y; i<n; i++){
    read(x),read(y);
    g[x].push_back(y); g[y].push_back(x);
  }
  dfs(1,0); //树增
  for(int i=1,x,y,z; i<=m; i++){ //差分
    read(x),read(y),read(z);
    change(root[x],1,N,z,1);
    change(root[y],1,N,z,1);
    int t=lca(x,y);
    change(root[t],1,N,z,-1);
    change(root[fa[t][0]],1,N,z,-1);
  }
  dfs2(1,0); //递归合并
  for(int i=1;i<=n;i++)printf("%d\n",ans[i]);
}