# automaton

## DFA

> 构建复杂度 O(ME) E: 字符表个数
>
> 查询复杂度 O(N)

## KMP

> 优化版 DFA
>
> 构建复杂度 O(M)
>
> 查询复杂度 O(N)

```c++
char a[1000100], b[1000100];
int p[1000100];
int main()
{
    scanf("%s%s", a + 1, b + 1);
    int la = strlen(a + 1), lb = strlen(b + 1);
    int j = 0;
    p[1] = 0;
    
    for (int i = 2; i <= lb; i++)
    {
        while (j > 0 && b[i] != b[j + 1])
            j = p[j]; // 往前翻记录了有相同前缀的j
        if (b[i] == b[j + 1])
            j++; // i匹配成功了，i继续往后
        p[i] = j;
    }
    j = 0;

    for (int i = 1; i <= la; i++)
    {
        while (j > 0 && a[i] != b[j + 1])
            j = p[j];
        if (a[i] == b[j + 1])
            j++;
        if (j == lb)
            printf("%d\n", i - lb + 1), j = p[j];
    }
    for (int i = 1; i < lb; i++)
        printf("%d ", p[i]);
    printf("%d", p[lb]);
    return 0;
}
```



## AC Automaton

