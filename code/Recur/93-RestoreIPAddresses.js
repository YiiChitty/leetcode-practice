/**
考点：1.所有可能的都搞出来---递归
2.stringObject.substr(start,length)  
start 必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
length 可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。
3.arrayObject.concat(arrayX,arrayX,......,arrayX) 
用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
arrayX 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。
返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。

93.复原IP地址 
给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

示例:
输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]

链接：https://leetcode-cn.com/problems/restore-ip-addresses
 */

//思路：
// IP三个点分成四部分 每部分0-255 每部分最多不超过3位
// 示例 25525511135 第一部分可能是 2 25 255
//                          如果第一部分是2 那么 第二部分 5 55 
//                                     如果第二部分 5 那么 第三部分 剩下的超过6位 不满足

export default (str) => {
    //保存所有可能的结果
    let r = []
        //递归函数  上次处理结果，待处理字符串
    let search = (cur, sub) => {
        //已经分为四部分且四部分长度相等
        if (cur.length === 4 && cur.join('') === str) {
            r.push(cur.join('.'));
        } else {
            //每部分长度最多是3位
            for (let i = 0, tmp, len = Math.min(3, sub.length); i < len; i++) {
                //待处理子串，取 1位 2位 3位
                tmp = sub.substr(0, i + 1);
                if (tmp < 256) {
                    //之前的合并进去  子串位置+1
                    search(cur.concat([tmp]), sub.substr(i + 1))
                }
            }
        }
    }
    search([], str);
    return r;
}