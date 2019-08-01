import matrix from '../../code/Matrix/54-SpiralMatrix'

test('SpiralMatrix', () => {
    let input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    expect(matrix(input)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
})