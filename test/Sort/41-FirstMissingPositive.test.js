import Test from '../../code/Sort/41-FirstMissingPositive.js'

test('FirstMissingPositive', () => {
    expect(Test([1, 2, 0])).toBe(3);
    expect(Test([3, 4, -1, 1])).toBe(2);
    expect(Test([7, 8, 9, 11, 12])).toBe(1);
    expect(Test([1, 2, 3])).toBe(4);
})