import Test from '../../code/Sort/SelectSort'

test('选择排序', () => {
    expect(Test([1, 5, 8, 3, 7])).toEqual([1, 3, 5, 7, 8])
})