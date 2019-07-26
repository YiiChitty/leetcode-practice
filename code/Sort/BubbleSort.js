export default (arr) => {
    //冒牌排序
    //一一比较，最大的放在最右边
    for (let i = arr.length - 1, tmp; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            tmp = arr[j];
            if (tmp > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr
}