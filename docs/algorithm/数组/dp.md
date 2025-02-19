# 动态规划

## 最大子数组和

```go
func maxSubArray(nums []int) int {
    f := make([]int, len(nums))
    f[0] = nums[0]
    for i := 1; i < len(nums);i++ {
        f[i] = max(f[i-1], 0) + nums[i]
    }
    return slices.Max(f)
}
```

## 爬楼梯

```go
func climbStairs(n int) int {
    f := make([]int, n+1)
    f[0], f[1] = 1, 1
    for i := 2; i <= n; i++ {
        f[i] = f[i-1] + f[i-2]
    }
    return f[n]
}
```

## 背包问题

### 01 背包

```go

```

### 目标和

给你一个非负整数数组 `nums` 和一个整数 `target` 。

向数组中的每个整数前添加 `'+'` 或 `'-'` ，然后串联起所有整数，可以构造一个 **表达式** ：

- 例如，`nums = [2, 1]` ，可以在 `2` 之前添加 `'+'` ，在 `1` 之前添加 `'-'` ，然后串联起来得到表达式 `"+2-1"` 。

返回可以通过上述方法构造的、运算结果等于 `target` 的不同 **表达式** 的数目。

```go
func findTargetSumWays(nums []int, target int) int {
    s := 0
    for _, x := range nums {
        s += x
    }
    s -= abs(target)
    if s < 0 || s%2 == 1 {
        return 0
    }
    m := s / 2 // 背包容量

    n := len(nums)
    f := make([][]int, n+1)
    for i := range f {
        f[i] = make([]int, m+1)
    }
    f[0][0] = 1
    for i, x := range nums {
        for c := 0; c <= m; c++ {
            if c < x {
                f[i+1][c] = f[i][c] // 只能不选
            } else {
                f[i+1][c] = f[i][c] + f[i][c-x] // 不选 + 选
            }
        }
    }
    return f[n][m]
}

func abs(x int) int { if x < 0 { return -x }; return x }
```

### 完全背包

给你一个整数数组 `coins` ，表示不同面额的硬币；以及一个整数 `amount` ，表示总金额。

计算并返回可以凑成总金额所需的 **最少的硬币个数** 。如果没有任何一种硬币组合能组成总金额，返回 `-1` 。

你可以认为每种硬币的数量是无限的。

```go
func coinChange(coins []int, amount int) int {
    n := len(coins)
    f := make([][]int, n+1)
    for i := range f {
        f[i] = make([]int, amount+1)
    }
    for j := range f[0] {
        f[0][j] = math.MaxInt / 2 // 除 2 防止下面 + 1 溢出
    }
    f[0][0] = 0
    for i, x := range coins {
        for c := 0; c <= amount; c++ {
            if c < x {
                f[i+1][c] = f[i][c]
            } else {
                f[i+1][c] = min(f[i][c], f[i+1][c-x]+1)
            }
        }
    }
    ans := f[n][amount]
    if ans < math.MaxInt/2 {
        return ans
    }
    return -1
}
```

## 线性DP

### 最长公共子序列（LCS）

```go
func longestCommonSubsequence(text1, text2 string) int {
    m, n := len(text1), len(text2)
    dp := make([][]int, m+1)
    for i := range dp {
        dp[i] = make([]int, n+1)
    }
    for i, c1 := range text1 {
        for j, c2 := range text2 {
            if c1 == c2 {
                dp[i+1][j+1] = dp[i][j] + 1
            } else {
                dp[i+1][j+1] = max(dp[i][j+1], dp[i+1][j])
            }
        }
    }
    return dp[m][n]
}
```

### 编辑距离

给你两个单词 `word1` 和 `word2`， *请返回将 `word1` 转换成 `word2` 所使用的最少操作数* 。

你可以对一个单词进行如下三种操作：

- 插入一个字符
- 删除一个字符
- 替换一个字符

```go
func minDistance(s, t string) int {
    n, m := len(s), len(t)
    f := make([][]int, n+1)
    for i := range f {
        f[i] = make([]int, m+1)
    }
    for j := 1; j <= m; j++ {
        f[0][j] = j
    }
    for i, x := range s {
        f[i+1][0] = i + 1
        for j, y := range t {
            if x == y {
                f[i+1][j+1] = f[i][j]
            } else {
                f[i+1][j+1] = min(f[i][j+1], f[i+1][j], f[i][j]) + 1
            }
        }
    }
    return f[n][m]
}
```

### 最长递增子序列（LIS）

```go
func lengthOfLIS(nums []int) int {
    f := make([]int, len(nums))
    for i, x := range nums {
        for j, y := range nums[:i] {
            if y < x {
                f[i] = max(f[i], f[j])
            }
        }
        f[i]++
    }
    return slices.Max(f)
}
```

## 状态机DP

## 区间DP

### 最长回文子序列

```go
func longestPalindromeSubseq(s string) int {
    n := len(s)
    f := make([][]int, n)
    for i := range f {
        f[i] = make([]int, n)
    }
    for i := n - 1; i >= 0; i-- {
        f[i][i] = 1
        for j := i + 1; j < n; j++ {
            if s[i] == s[j] {
                f[i][j] = f[i+1][j-1] + 2
            } else {
                f[i][j] = max(f[i+1][j], f[i][j-1])
            }
        }
    }
    return f[0][n-1]
}
```

### 多边形三角分的最低得分

你有一个凸的 `n` 边形，其每个顶点都有一个整数值。给定一个整数数组 `values` ，其中 `values[i]` 是第 `i` 个顶点的值（即 **顺时针顺序** ）。

假设将多边形 **剖分** 为 `n - 2` 个三角形。对于每个三角形，该三角形的值是顶点标记的**乘积**，三角剖分的分数是进行三角剖分后所有 `n - 2` 个三角形的值之和。

返回 *多边形进行三角剖分后可以得到的最低分* 。

```go
func minScoreTriangulation(v []int) int {
    n := len(v)
    f := make([][]int, n)
    for i := range f {
        f[i] = make([]int, n)
    }
    for i := n - 3; i >= 0; i-- {
        for j := i + 2; j < n; j++ {
            f[i][j] = math.MaxInt
            for k := i + 1; k < j; k++ {
                f[i][j] = min(f[i][j], f[i][k]+f[k][j]+v[i]*v[j]*v[k])
            }
        }
    }
    return f[0][n-1]
}
```

