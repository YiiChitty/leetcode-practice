/**
85 最大矩阵
给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

示例:
输入:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
输出: 6

链接：https://leetcode-cn.com/problems/maximal-rectangle 
 */
export default (arr) => {
    //保存结果
    let result = [];
    let reg = /1{2,}/g;
    //arr中所有1 提取相邻1(起始点+截止点)
    arr = arr.map(item => {
            let str = item.join('');
            let r = reg.exec(str); //当前匹配索引
            let rs = [];
            while (r) {
                rs.push([r.index, r.index + r[0].length - 1]);
                r = reg.exec(str);
            }
            return rs;
        })
        //递归计算相邻矩阵   弹出两行，计算完之后放回
    let maxRect = (arr, result, n = 1) => {
        let top = arr.pop();
        let next = arr.pop();
        let tt, nn; //记录一二行的每一个起始点和截止点
        let start, end; //交叉起始结束点
        let width = 1,
            maxWidth;
        n++;
        for (let i = 0; i < top.length; i++) {
            tt = top[i];
            for (let j = 0; j < next.length; j++) {
                nn = next[j];
                width = Math.min(tt[1], nn[1]) - Math.max(tt[0] - nn[0]);
                if (width > maxWidth) {
                    maxWidth = width;
                    start = Math.max(tt[0], nn[0]);
                    end = Math.min(tt[1], nn[1]);
                }
            }
        }
        //没有交叉点
        if (start === undefined || end === undefined) {
            if (n < 3) {
                return false
            } else {
                width = top[0][1] - top[0][0] + 1;
                if (width > 1) result.push((n - 1) * width);
            }
        } else {
            arr.push([
                [start, end]
            ]);
            maxRect(arr, result, n++);
        }
    }
    while (arr.length > 1) {
        maxRect([].concat(arr), result);
        arr.pop();
    }
    //取最大值
    let max = 0;
    let item = result.pop()
    while (item) {
        if (item > max) {
            max = item
        }
        item = result.pop()
    }
    return max > 0 ? max : -1
}