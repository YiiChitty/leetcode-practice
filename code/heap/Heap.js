//最大堆排序
class Heap {
    constructor(data) {
        this.data = data;
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