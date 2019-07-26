export default (arr) => {
    //in-place 减少空间法快排
    //划分交换排序  减少内存消耗
    // 5 9 7 8 3 6 1
    // 从5开始，下一位的 9 作为交换位置，遍历到3时，与9交换；
    //          交换位置右移，7作为交换位置，遍历到1时，与7交换；
    //          交换位置右移，已经没有比5小的元素了，此时 1 5进行交换;

    //数组内指定两个位置进行值交换
    let swap = (arr, a, b) => {
            let tmp = arr[a];
            arr[a] = arr[b];
            arr[b] = tmp;
        }
        //完成一次划分交换
        //找到标尺元素应该放入位置  left为此次遍历的左下标  right为此次遍历的右下标
    let findCenter = (arr, left, right) => {
        //标尺元素flag
        let flag = arr[left];
        //交换起始位
        let idx = left + 1;
        for (let i = idx; i <= right; i++) {
            if (arr[i] < flag) {
                swap(arr, idx, i);
                //交换位置右移
                idx++;
            }
        }
        swap(arr, left, idx - 1);
        return idx; //返回当前交换后的标识元素的位置
    }

    let sort = (arr, left, right) => {
            if (left < right) {
                let center = findCenter(arr, left, right)
                sort(arr, left, center - 1);
                sort(arr, center, right);
            }
        }
        //输入的是角标
    sort(arr, 0, arr.length - 1);
    return arr;
}