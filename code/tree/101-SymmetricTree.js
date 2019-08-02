/**
 给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/symmetric-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
class Node {
    constructor(val) {
        this.value = val;
        this.left = this.right = undefined;
    }
}
//构造二叉树
class Tree {
    constructor(data) {
        //临时存储所有节点，方便寻找父子节点
        let nodeList = [];
        //顶点节点
        let root;
        for (let i = 0; i < data.length; i++) {
            let node = new Node(data[i]);
            nodeList.push(node);
            if (i > 0) {
                //计算属于哪一层
                let n = Math.floor(Math.sqrt(i + 1));
                //当前层起始点的索引
                let q = Math.pow(2, n) - 1;
                //上一层起始点的索引
                let p = Math.pow(2, n - 1) - 1;
                //当前节点的父节点
                let parent = nodeList[p + Math.floor((i - q) / 2)];
                if (parent.left) {
                    parent.right = node;
                } else {
                    parent.left = node;
                }
            }
        }
        root = nodeList.shift();
        nodeList = null;
        return root;
    }
    static isSymmetry(root) {
        if (!root) { return false }
        let walk = (left, right) => {
            if (!left && !right) { return true }
            if ((left && !right) || (!left && right) || left.value !== right.value) {
                return false;
            }
            return walk(left.left, right.right) && walk(left.right, right.left);
        }
        return walk(root.left, root.right)
    }
}
export default Tree
export {
    Node
}