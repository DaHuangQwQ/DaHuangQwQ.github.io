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

