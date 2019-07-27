import Test from '../../code/stack/682-BaseballGame.js'

test('BaseballGame', () => {
    expect(Test(["5", "2", "C", "D", "+"])).toBe(30)
    expect(Test(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27)
})