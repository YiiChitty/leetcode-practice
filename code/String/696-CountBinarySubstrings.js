/**
 * 考察知识点： String.slice,String.match,String,repeat,Array.push,RegExp

给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
重复出现的子串要计算它们出现的次数。
示例 1 :
输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
请注意，一些重复出现的子串要计算它们出现的次数。
另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。

示例 2 :
输入: "10101"
输出: 4
解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
注意：
s.length 在1到50,000之间。
s 只包含“0”或“1”字符。

链接：https://leetcode-cn.com/problems/count-binary-substrings
 */

/**
 * 思路1:利用正则表达式来写
 * 0011001 每次都从第一个字符开始，直到遇到非它的。比如说第一次，00截止，长度为2，那么就从后检查有没有满足0011的，输出0011。
 *                                                   第二次，从第二个0开始，后面遇到1就截止，长度为1.那么就从后面match有没有满足01的，输出01
 *                                                   第三次，从1开始，11截止，长度为2，那么就从后检测有没有1100的，输出1100
 * 只需要把上述过程实现即可，需要每次减1位
 */
export default (str) => {
    // 保存数据
    let r = []
        // 给定任意子输入都返回第一个符合条件的子串
    let match = (str) => {
        let j = str.match(/^(0+|1+)/)[0]
        let o = (j[0] ^ 1).toString().repeat(j.length)
        let reg = new RegExp(`^(${j}${o})`)
        if (reg.test(str)) {
            return RegExp.$1
        } else {
            return ''
        }
    }
    for (let i = 0, len = str.length - 1; i < len; i++) {
        let sub = match(str.slice(i))
        if (sub) {
            r.push(sub)
        }
    }
    return r
}
/** 
 *   思路2
 *   000111必定有三个子串
 *   00011必定有两个子串
 *   0111必定有1个子串 
 *   以此类推, 每两组数据之间长度最短的值为子串的数量
 */
// export default (str) => {
//     let n = 0,
//         arr = s.match(/([1]+)|([0]+)/g)
//     for (let i = 0; i < arr.length - 1; i++) {
//         n += Math.min(arr[i].length, arr[i + 1].length)
//     }
//     return n
// }


/**
 * 常规思路：判断个数，迭代输出
 */
// export default (str) => {
//     var prev = 0,
//         curr = 1,
//         res = 0
//     for (var i = 1; i < s.length; i++) {
//         if (s[i] === s[i - 1]) {
//             curr++
//         } else {
//             prev = curr
//             curr = 1
//         }
//         if (prev >= curr) {
//             res++
//         }
//     }
//     return res
// }