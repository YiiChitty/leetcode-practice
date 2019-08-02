/**
给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

示例 1:
输入:"tree"
输出:"eert"
解释:'e'出现两次，'r'和't'都只出现一次。
因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。

示例 2:
输入:"cccaaa"
输出:"cccaaa"
解释:'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
注意"cacaca"是不正确的，因为相同的字母必须放在一起。

示例 3:
输入:"Aabb"
输出:"bbAa"
解释:此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
注意'A'和'a'被认为是两种不同的字符。

链接：https://leetcode-cn.com/problems/sort-characters-by-frequency
 */

class Heap {
    constructor(str) {
        let map = new Map();
        str.split('').forEach(item => {
            if (map.has(item)) {
                map.set(item, map.get(item) + 1);
            } else {
                map.set(item, 1);
            }
        })
        this.map = map;
        this.data = Array.from(map.values());
    }
    sort() {
        let iArr = this.data;
        let n = iArr.length;
        if (n <= 1) {
            return iArr;
        } else {
            for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                Heap.maxHeapify(iArr, i, n);
            }
            for (let j = 0; j < n; j++) {
                Heap.swap(iArr, 0, n - 1 - j);
                Heap.maxHeapify(iArr, 0, n - 1 - j - 1);
            }
        }
        return iArr;
    }
    toString() {
        let arr = this.sort();
        let str = [];
        while (arr.length) {
            let top = arr.pop();
            for (let [k, v] of this.map) {
                if (v === top) {
                    str.push(k.repeat(v));
                    this.map.delete(k);
                    break;
                }
            }
        }
        return str.join('');
    }
    static swap(arr, a, b) {
            if (a === b) {
                return
            } else {
                let c = arr[a];
                arr[a] = arr[b];
                arr[b] = c;
            }
        }
        //构建最大堆
    static maxHeapify(arr, i, size) {
        //左节点
        let l = i * 2 + 1;
        //右节点
        let r = i * 2 + 2;
        let largest = i;
        //父节点和左右节点比较，找到最大值索引
        if (l <= size && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r <= size && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest !== i) {
            Heap.swap(arr, i, largest);
            Heap.maxHeapify(arr, largest, size);
        }
    }
}

export default Heap