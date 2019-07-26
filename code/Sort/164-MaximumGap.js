import { expression } from "@babel/template";
import { maxHeaderSize } from "http";

/**
 * 考点：冒泡排序
 
 164.最大间距
给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
如果数组元素个数小于 2，则返回 0。

示例 1:
输入: [3,6,9,1]
输出: 3
解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。

示例 2:
输入: [10]
输出: 0
解释: 数组元素个数小于 2，因此返回 0。

说明:
你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。

链接：https://leetcode-cn.com/problems/maximum-gap
 */
export default (arr) => {
    if (arr.length < 2) { return 0 }
    //冒泡排序 一旦确定好排序后，马上算最右边两个的差值
    let max = 0,
        space;
    for (let i = arr.length - 1, tmp; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
        //从第二轮才能确定排序顺序
        if (i < arr.length - 1) {
            space = arr[i + 1] - arr[i];
        }
        if (space > max) {
            max = space;
        }
        //没有算到i=0的情况
    }
    return Math.max(max, arr[1] - arr[0]);
}