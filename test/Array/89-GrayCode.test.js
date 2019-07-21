import GrayCode from '../../code/Array/89-GrayCode.js'

test('GrayCode:2', () => {
    expect(GrayCode(2)).toEqual([0, 1, 3, 2])
})
test('GrayCode:0', () => {
    expect(GrayCode(0)).toEqual(['0'])
})