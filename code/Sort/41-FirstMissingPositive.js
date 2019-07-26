import { arrayExpression } from "@babel/types";

/**
 
41 缺失的第一个正数
给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

示例 1:
输入: [1,2,0]
输出: 3

示例 2:
输入: [3,4,-1,1]
输出: 2

示例 3:
输入: [7,8,9,11,12]
输出: 1

链接：https://leetcode-cn.com/problems/first-missing-positive
 */
//思路：1 如果没有1 那就返回1
//     2 从小到大找
export default (arr) => {
    //过滤非正整数
    arr = arr.filter(item => item > 0);
    //剩余为空 返回1
    //排序。 1.先拿到最小值，元素不是1，返回1;
    //       2.当下一个数和当前数字之差大于1，返回当前数字+1；
    //       3.当都没有的时候，返回最后一个数+1、
    for (let i = 0, min; i < arr.length; i++) {
        min = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                let c = min
                min = arr[j]
                arr[j] = c
            }
        }
        arr[i] = min
            //第二次遍历之后
        if (i > 0) {
            if (arr[i] - arr[i - 1] > 1) {
                return arr[i - 1] + 1;
            }
        } else {
            if (min != 1) {
                return 1;
            }
        }
    }
    return arr.length ? arr.pop() + 1 : 1;
}