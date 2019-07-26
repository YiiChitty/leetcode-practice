# Leetcode-practice

书到用时方恨少，练得少就想不到。

愿你有事没事多刷题。

​													——2019.07



## 简介

内容为：**LeetCode算法题刷题**

此项目记录了Chitty的leetcode刷题日常，写算法难，用js写算法更难。Be a better coding girl 道阻且长。



## 使用方法

建议clone到本地查看，可以随便学习一下自动化测试插件Jest

[Jest 自动化测试插件官方文档](https://jestjs.io/docs/zh-Hans/getting-started.html) 

简单说就是  
Code目录下建立XXX.js,Test目录下建立XXX.test.js

XXX.js的写法  

```javascript
export default (x)=>{
    return ''
}
```

Test.js中测试用例的写法  

```javascript
import xxx from '../../code/XXX.js'

test('输出说明', () => {
    //引用类型用toEqual()
    expect(xxx(输入)).toBe(输出)
})
```

测试:`npm test`


## 源码目录

按类型分类，参看Code下各文件夹
### [字符串](https://github.com/YiiChitty/leetcode-practice/tree/master/code/String)  
[经典题：字母倒序输出](https://github.com/YiiChitty/leetcode-practice/blob/master/code/String/557-ReverseWordsinaStringIII.js)  
[经典题：重复子串](https://github.com/YiiChitty/leetcode-practice/blob/master/code/String/696-CountBinarySubstrings.js)   

### [数组](https://github.com/YiiChitty/leetcode-practice/tree/master/code/Array)  
[经典题：九宫格输出(排列组合)](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Array/17-PhoneNum.js)  
[经典题：卡牌分类](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Array/914-DeckCard.js)  
[经典题：种花问题](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Array/605-PlaceFlowers.js)  
[经典题：格雷编码](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Array/89-GrayCode.js)   





