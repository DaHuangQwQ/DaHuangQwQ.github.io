#include <iostream>
#define ll long long
using namespace std;
int n, k;
int cnt;
int s[1 << 12];   // 同一行合法状态集
int num[1 << 12]; // 每个合法状态的国王数
ll f[12][144][1 << 12];
// f i j a 前i行放了j个国王 第i行第a个状态时的方案数
int main()
{
    cin >> n >> k;
    for (int i = 0; i < (1 << n); i++) // 枚举一行的所有状态
        if (!(i & i >> 1))
        {                 // 如果不存在相邻的1
            s[cnt++] = i; // 一行的合法状态集，例101
            for (int j = 0; j < n; j++)
                num[i] += (i >> j & 1); // 每个合法状态包含的国王数
        }
    
    f[0][0][0] = 1;
    for (int i = 1; i <= n + 1; i++)          // 枚举行
        for (int j = 0; j <= k; j++)          // 枚举国王数
            for (int a = 0; a < cnt; a++)     // 枚举第i行的合法状态
                for (int b = 0; b < cnt; b++) // 枚举第i-1行的合法状态
                {
                    int c = num[s[a]];           // 第i行第a个状态的国王数
                    if ((j >= c)                 // 可以继续放国王
                        && !(s[b] & s[a])        // 不存在同列的1
                        && !(s[b] & (s[a] << 1)) // 不存在斜对角的1
                        && !(s[b] & (s[a] >> 1)))
                        f[i][j][a] += f[i - 1][j - c][b]; // 行间转移
                }
    cout << f[n + 1][k][0] << endl;
    return 0;
}