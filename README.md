# Leetcode-practice
  
## 简介

此项目为Chitty的leetcode刷题日常


## 源码查看

按类型分类，参看Code下各文件夹

## 使用方法

[Jest 自动化测试插件官方文档](https://jestjs.io/docs/zh-Hans/getting-started.html) 

简单说就是  
Code目录下建立XXX.js,Test目录下建立XXX.test.js

XXX的写法  
```javascript
export default (x)=>{
    return ''
}
```
Test中测试用例的写法  
```javascript
import xxx from '../../code/XXX.js'

test('输出说明', () => {
    //引用类型用toEqual()
    expect(xxx(输入)).toBe(输出)
})
```
测试:`npm test`