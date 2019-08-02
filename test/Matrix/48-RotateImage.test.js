import Test from '../../code/Matrix/48-RotateImage'

test('RotateImage', () => {
    let input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let output = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
    ];
    expect(Test(input)).toEqual(output);
})