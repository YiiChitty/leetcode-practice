import Test from '../../code/stack/85-MaximalRectangle'

test('MaximalRectangle', () => {
    expect(Test([
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"]
    ])).toBe(6)
})