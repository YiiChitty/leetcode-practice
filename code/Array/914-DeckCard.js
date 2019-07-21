import { formatResultsErrors } from "jest-message-util";

/**
 * 给定一副牌，每张牌上都写着一个整数。
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 * 每组都有 X 张牌。组内所有的牌上都写着相同的整数。
 * 仅当你可选的 X >= 2 时返回 true。
 * 
 * 示例 1：
 * 输入：[1,2,3,4,4,3,2,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
 * 
 * 示例 2：
 * 输入：[1,1,1,2,2,2,3,3]
 * 输出：false
 * 解释：没有满足要求的分组。
 * 
 * 示例 3：
 * 输入：[1]
 * 输出：false
 * 解释：没有满足要求的分组。
 * 
 * 示例 4：
 * 输入：[1,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]
 * 
 * 示例 5：
 * 输入：[1,1,2,2,2,2]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[2,2]
 * 提示：
 * 1 <= deck.length <= 10000
 * 0 <= deck[i] < 10000
链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards
 */
export default (arr) => {
    //其实这道题就是在求相同数字数目的最大公约数的问题
    //先写求最大公约数的方法
    let gcd = (a, b) => {
            if (b === 0) {
                return a
            } else {
                return gcd(b, a % b)
            }
        }
        //记录每张牌的数目
    let group = []
    let tmp = {}
    arr.forEach(element => {
        tmp[element] = tmp[element] ? tmp[element] + 1 : 1
    })
    for (let v of Object.values(tmp)) {
        group.push(v)
    }

    while (group.length > 1) {
        let a = group.shift()
        let b = group.shift()
        let v = gcd(a, b)
        if (v === 1) {
            //最小公约数是1，false
            return false
        } else {
            //放回前两个数的最大公约数继续计算
            group.unshift(v)
        }
    }
    //判断最后得出的最小公约数是否是1
    return group.length ? group[0] > 1 : false
}