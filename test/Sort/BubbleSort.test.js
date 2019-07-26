import TEST from '../../code/Sort/BubbleSort'

test('冒泡排序', () => {
    expect(TEST([1, 9, 5, 4, 2])).toEqual([1, 2, 4, 5, 9])
})