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

### [正则表达式](https://github.com/YiiChitty/leetcode-practice/tree/master/code/Regexp)

正则表达说明参看[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)  

[经典题：重复的子串](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Regexp/459-RepeatedSubstringPattern.js)    
[经典题：实现正则表达匹配](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Regexp/10-RegularExpressionMatching.js)    

### [排序](https://github.com/YiiChitty/leetcode-practice/tree/master/code/Sort)

[冒泡排序](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Sort/BubbleSort.js)  
[选择排序](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Sort/SelectSort.js)  
[基本快速排序](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Sort/FastSortBase.js)  
[in-space快速排序](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Sort/FastSortHigh.js)  
[经典题：奇偶排序(冒泡变种)](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Sort/922-SortArraybyParity.js)  
[经典题：第k最大值(冒泡变种)](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Sort/215-KLargestElementinArray.js)  
[经典题：最大区间(选择排序变种)](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Sort/41-FirstMissingPositive.js)  



### [递归](https://github.com/YiiChitty/leetcode-practice/tree/master/code/Recur)

[经典题：输出IP地址](https://github.com/YiiChitty/leetcode-practice/blob/master/code/Recur/93-RestoreIPAddresses.js)  


