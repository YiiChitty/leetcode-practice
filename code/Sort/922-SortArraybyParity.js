/**
考点：冒泡排序

922 数组奇偶排序
给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；
                  当 A[i] 为偶数时， i 也是偶数。
你可以返回任何满足上述条件的数组作为答案。

示例：
输入：[4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。

提示：
2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000

链接：https://leetcode-cn.com/problems/sort-array-by-parity-ii
*/
//偶数偶下标，奇数奇下标
export default (arr) => {
    //先数组排序，降序排序
    arr.sort((a, b) => a - b);
    //存奇偶排序后的数组
    let r = []
        //记录奇数偶数下标
    let odd = 1,
        even = 0;
    //遍历数组
    arr.forEach(item => {
        if (item % 2 === 1) {
            r[odd] = item;
            odd += 2;
        } else {
            r[even] = item;
            even += 2;
        }
    });
    return r;
}