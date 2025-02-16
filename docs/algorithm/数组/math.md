# 数学

## 回文数

```go
func isPalindrome(x int) bool {
    if x < 0 {
        return false
    }
    t := x
    sum := 0
    for x != 0 {
        sum = sum * 10 + x % 10
        x /= 10
    }
    return sum == t
}
```

## 加一

```go
func plusOne(digits []int) (ans []int) {
    sz := len(digits)
    carry := 0
    digits[sz-1] += 1
    for i := sz-1; i >= 0; i-- {
        sum := digits[i] + carry
        digits[i] = sum % 10
        carry = sum / 10
    }
    if carry > 0 {
        ans = append([]int{carry}, digits...)
        return
    }
    return digits
}
```

## 阶乘后的零

```go
func trailingZeroes(n int) (ans int) {
    for n > 0 {
        // 循环 k 次后，n 变成了 floor(n/5^k)
        n /= 5
        ans += n
    }
    return
}
```

## X的平方根

```go
func mySqrt(x int) int {
    l, r := 0, x
    ans := -1
    for l <= r {
        mid := l + (r - l) / 2
        if mid * mid <= x {
            ans = mid
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return ans
}
```

## 快速幂

```go
func myPow(x float64, n int) float64 {
    if n >= 0 {
        return f(x, n)
    } else {
        return 1.0 / f(x, -n)
    }
}

func f(x float64, n int) float64 {
    res := 1.0
    for n > 0 {
        if n % 2 == 1 {
            res *= x
        }
        x *= x
        n >>= 1
    }
    return res
}
```

