/*
在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

示例 1:
输入: 4->2->1->3
输出: 1->2->3->4

示例 2:
输入: -1->5->3->4->0
输出: -1->0->3->4->5

链接：https://leetcode-cn.com/problems/sort-list
 */
//声明链表的节点
class Node {
    constructor(value) {
        this.val = value;
        this.next = undefined;
    }
}

//申明链表
class NodeList {
    constructor(arr) {
        let head = new Node(arr.shift());
        let next = head;
        arr.forEach(item => {
            next.next = new Node(item);
            next = next.next;
        });
        return head;
    }
}
//交换两个节点的值
let swap = (p, q) => {
        let val = p.val;
        p.val = q.val;
        q.val = val;
    }
    //寻找基准元素节点
let partion = (begin, end) => {
    let val = begin.val;
    let p = begin;
    let q = begin.next;
    while (q != end) {
        if (q.val < val) {
            p = p.next;
            swap(p, q);
        }
        q = q.next;
    }
    //基准元素去中间
    swap(p, begin);
    return p;
}

export default function sort(begin, end) {
    //链表的快速排序
    if (begin !== end) {
        let part = partion(begin, end)
        sort(begin, part);
        sort(part.next, end);
    }
}

export {
    Node,
    NodeList
}