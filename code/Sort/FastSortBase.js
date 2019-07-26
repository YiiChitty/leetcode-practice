export default (arr) => {
    //基本快排
    //数组中制定一个元素为标尺，比它大的放在该元素后面，比它小的放到该元素前，如此重复至正确排序
    //一般是选第一个元素为标尺
    let quickSort = (arr) => {
        let len = arr.length;
        if (len < 2) {
            //终止
            return arr;
        } else {
            //设置标尺，左右存放数组
            let flag = arr[0];
            let left = [];
            let right = [];
            for (let i = 1; i < len; i++) {
                //小于放左，大于放右
                if (arr[i] < flag) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            }
            return quickSort(left).concat(flag, quickSort(right))
        }
    }
    return quickSort(arr);
}