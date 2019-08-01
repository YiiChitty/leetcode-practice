/**
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]

示例 2:
输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]


链接：https://leetcode-cn.com/problems/spiral-matrix
 */
export default (arr) => {
    //处理每一圈的数据遍历过程
    let map = (arr, r = []) => {
        for (let i = 0, len = arr.length; i < len; i++) {
            if (i === 0) {
                r = r.concat(arr[i]);
            } else if (i === len - 1) {
                r = r.concat(arr[i].reverse());
            } else {
                r.push(arr[i].pop()); //取每行最后一个并删除
            }
        }
        arr.shift();
        arr.pop();
        for (let i = arr.length - 1; i > 0; i--) {
            r.push(arr[i].shift());
        }
        if (arr.length) {
            return map(arr, r);
        } else {
            return r;
        }
    }
    return map(arr, []);
}