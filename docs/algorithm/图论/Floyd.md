# Floyd


> 这段代码的基本思想就是：最开始只允许经过1号顶点进行中转，接下来只允许经过1和2号顶点进行中转……允许经过1~n号所有顶点进行中转，求任意两点之间的最短路程。用一句话概括就是：从i号顶点到j号顶点只经过前k号点的最短路程。

> 所有的边全部给出，按照时间顺序更新每一个可用的点（即修建好村庄），对于每个时间点进行两点之间询问，求对于目前建设的所有村庄来说任意两点之间的最短路

> 不正好就是Floyd算法中使用前k个节点更新最短路的思维吗？



```cpp
#include<iostream>
#include<cstdio>
#include<cstring>
using namespace std;
const int N=102;
int n,m,k;
double ans[N],a[N][N],E[N][N];
int main()
{
    memset (E,0x7f,sizeof(E));
    memset (ans,0,sizeof(ans));
    scanf ("%d%d",&n,&m);
    for (int i=1;i<=m;i++)
    {
        int x,y;
        double z;
        scanf ("%d%d%lf",&x,&y,&z);
        E[x][y]=z;
        E[y][x]=z;
        a[x][y]=1;
        a[y][x]=1;
    }
    for (int k=1;k<=n;k++)
        for (int i=1;i<=n;i++)
            for (int j=1;j<=n;j++)
            {
                if (E[i][k]+E[k][j]<E[i][j])
                {
                    E[i][j]=E[i][k]+E[k][j];
                    a[i][j]=a[i][k]*a[k][j];//由乘法原理计算i到j最短路个数
                }
                else if (E[i][j]==E[i][k]+E[k][j])//不止一条最短路应该加上路径个数
                    a[i][j]+=a[i][k]*a[k][j];
            }
    for (int i=1;i<=n;i++)//去除自己到自己路径个数
        a[i][i]=0;
    for (int k=1;k<=n;k++)
    {
        for (int i=1;i<=n;i++)
            for (int j=1;j<=n;j++)
            {
                 if (E[i][j]==E[i][k]+E[k][j]&&a[i][j]>0)
                     ans[k]+=a[i][k]*a[k][j]/a[i][j];//由公式计算I(k)
            }
        printf ("%.3lf\n",ans[k]);
    }
    return 0;
}
```