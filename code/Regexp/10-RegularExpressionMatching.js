/*
考点：理解匹配原理

10.正则表达式匹配
 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
'.' 匹配任意单个字符;'*' 匹配零个或多个前面的那一个元素
 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
说明:
s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。

示例 1:
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串

示例 2:
输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。
因此，字符串 "aa" 可被视为 'a' 重复了一次。

示例 3:
输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。

示例 4:
输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。

示例 5:
输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
链接：https://leetcode-cn.com/problems/regular-expression-matching
 */
//思路：
//以最后一个为例
//mississippi
//mis*is*p*.
//也就是说：
//正常字母必须完全匹配
//遇到.可以直接跳一位；
//遇到*： 情况1：sssa  s*sa 情况2：ssa s*sa 
export default (s, p) => {
    let isMatch = (s, p) => {
        //边界 s和p都为空，说明处理完成，返回true,否则返回false
        if (p.length <= 0) {
            return s.length ? false : true
        }
        //判断p模式字符串的第一个字符和s字符串的第一个字符是不是匹配
        let match = false;
        if (s.length > 0 && (p[0] === s[0] || p[0] === '.')) {
            match = true;
        }
        //判断*的情况
        if (p.length > 1 && p[1] === '*') {
            //s*匹配0个字符 或 1个字符 用来表示s*匹配多个s
            return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p))
        } else {
            return match && isMatch(s.slice(1), p.slice(1))
        }
    }
    return isMatch(s, p)
}