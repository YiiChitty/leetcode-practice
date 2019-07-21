import { CodeGenerator } from "@babel/generator";

import { numberLiteralTypeAnnotation } from "@babel/types";

/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射(九宫格)。注意 1 不对应任何字母。
 * 
 * 示例:
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
 */
export default (str) => {
    //为空返回空
    if (!str) { return [] }

    //map映射关系
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    //输入字符按字符分隔变成数组
    let num = str.split('');
    //保存键盘映射后的字母内容 23=>['abc','def']
    let code = []
    num.forEach(item => {
        if (map[item]) {
            code.push(map[item])
        }
    })

    //只有一个数字的情况
    if (code.length <= 1) {
        return code[0].split('')
    }

    //字符组合
    let comb = (arr) => {
        //保存前两个组合的结果
        let tmp = []
        for (let i = 0, il = arr[0].length; i < il; i++) {
            for (let j = 0, jl = arr[1].length; j < jl; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        //去掉组合后前两个，插入新组合
        arr.splice(0, 2, tmp)
        if (arr.length > 1) {
            comb(arr)
        } else {
            return tmp
        }
        return arr[0]
    }

    return comb(code)
}