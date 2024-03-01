
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::


```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```



```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```



```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```



```ts {1}
// 默认禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```





### 题目背景

李飞是一位年轻的程序员，对编程充满热情。一天，他发现了一款名为《我被美女包围了》的游戏，这款游戏充满了诱人的美女角色和令人陶醉的游戏情节。李飞被游戏中的美女迷得神魂颠倒，决定以这个游戏为灵感创作一些恶搞编程题目。

编程题目背景如下：

李飞发现了一款神秘的虚拟现实游戏，他深陷其中，发现自己被美女包围。为了逃脱这个虚拟的美女团团围，李飞决定编写一些恶搞的编程题目，挑战其他程序员的智商。

**美女排序：** 在这个虚拟现实中，美女有不同的特点和属性。李飞创建了一个美女类，要求其他程序员根据美女的各项属性进行排序，以找到最具吸引力的美女。

这些恶搞编程题目成为了一时的热门话题，程序员们纷纷挑战自己的智力，试图摆脱这个虚拟美女的包围。这一切都源于李飞对编程和游戏的热爱，他希望通过这些题目，让程序员们在编码的同时也能体验一把虚拟美女的诱惑。