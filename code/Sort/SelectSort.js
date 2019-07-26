export default (arr) => {
    //选择排序
    //从头开始依次进行，每次找到后面最小的就跟第一个进行值交换
    for (let i = 0, min; i < arr.length; i++) {
        min = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                let c = min;
                min = arr[j];
                arr[j] = c;
            }
        }
        arr[i] = min;
    }
    return arr
}