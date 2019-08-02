/**
编写一段程序来查找第 n 个超级丑数。
超级丑数是指其所有质因数都是长度为 k 的质数列表 primes 中的正整数。

示例:
输入: n = 12, primes = [2,7,13,19]
输出: 32 
解释: 给定长度为 4 的质数列表 primes = [2,7,13,19]，
前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。
说明:
1 是任何给定 primes 的超级丑数。
 给定 primes 中的数字以升序排列。
0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000 。
第 n 个超级丑数确保在 32 位有符整数范围内。

链接：https://leetcode-cn.com/problems/super-ugly-number
 */
// 求解任意整数的质因数
// 质因数是否在指定质因数范围内
// 是否达到指定个数n
class Heap {
    constructor(arr) {
        this.data = arr;
        this.max = arr.length;
        this.sort();
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
        }
        return iArr;
    }
    find(val, i = 0) {
        let arr = this.data;
        if (val > arr[i] || i > this.max) {
            return false;
        } else if (val === arr[i]) {
            return val;
        } else {
            return this.find(val, i * 2 + 1) || this.find(val, i * 2 + 2)
        }
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
class Ugly {
    constructor(n, primes) {
        this.n = n;
        this.primes = new Heap(primes);
    }
    getAll() {
            //超级丑数列表
            let res = [1];
            let i = 2;
            let primes = this.primes;
            while (res.length < this.n) {
                let arr = Ugly.getPrimes(i);
                let k = 0;
                let len = arr.length;
                for (; k < len; k++) {
                    if (!primes.find(arr[k])) {
                        break;
                    }
                }
                //k=len 有两种情况：k为质数；k所有质因数都在指定列表中
                if (k === len) {
                    if (len === 0) {
                        if (primes.find(i)) {
                            res.push(i);
                        }
                    } else {
                        res.push(i);
                    }
                }
                i++
            }
            return res[this.n - 1];
        }
        //计算指定正整数的质因数
    static getPrimes(n) {
        let prime = (n) => {
            //存储所有的质因数
            let arr = [];
            for (let i = 2; i < n / 2 + 1; i++) {
                if (n % i === 0 && !prime(i).length) {
                    arr.push(i)
                }
            }
            return arr;
        }
        return prime(n);
    }

}

export default Ugly
export { Heap }