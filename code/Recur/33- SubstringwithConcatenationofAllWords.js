/**
给定一个字符串 s 和一些长度相同的单词 words。
找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

示例 1：
输入：
  s = "barfoothefoobarman",
  words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。

示例 2：
输入：
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
输出：[]

链接：https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words
 */

//思路：words[a,b,c]  递归排列组合[a]  第一位 b c中选一位放在第二位
//                               [b] 第一位 a c中选一位放在第二位
//                               [c] 第一位 a b中选一位放在第二位

//先排列组合生成子串组合，然后看看对应字符串有无对应的即可
export default (str, words) => {
    //数组长度
    let num = words.length
        //结果
    let result = []
        //生成递归的函数
    let range = (r, _arr) => {
        //边界，计算完毕
        if (r.length === num) {
            result.push(r)
        } else {
            _arr.forEach((item, idx) => {
                let tmp = [].concat(_arr);
                tmp.splice(idx, 1); //丢出第一位，生成第二位待选数组
                range(r.concat(item), tmp);
            })
        }
    }
    range([], words);
    //子串获取完成，检查有没有匹配的子串
    return result.map(item => {
        return str.indexOf(item.join(''))
    }).filter(item => item !== -1).sort()
}