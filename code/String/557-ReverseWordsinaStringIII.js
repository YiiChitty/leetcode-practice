import { isTerminatorless } from "@babel/types"

// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// 示例 1:
// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 
// 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
// 链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii

// 考点：String.split String.match Array.map  Array.reverce Array.join

// 思路：先用利用空格分割每个单词，单词变数组，再在每个数组内进行反转

// export default (str) => {
//     // 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//     let arr = str.split(' ')
//         // 对数组进行遍历，然后每个元素进行反转
//     let result = arr.map(item => {
//         return item.split('').reverse().join('')
//     })
//     return result.join(' ')
// }

// 更优雅的写法
// export default (str) => {
//     return str.split(' ').map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }


//split的正则
// export default (str) => {
//     return str.split(/\s/g).map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

//String.match方法,识别所有单词，依次识别
// export default (str) => {
//     return str.match(/[\w']+/g).map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

//leetcode最快的思路
//先把每个字符都颠倒过来,tsetnoc edoCteeL ekat s'teL 
//之后按照空格分隔开， 重新排序
export default (str) => {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}