import Test from '../../code/Sort/FastSortBase.js'
import { exportAllDeclaration } from '@babel/types';

test('FastSort', () => {
    expect(Test([1, 2, 0])).toEqual([0, 1, 2]);
    expect(Test([5, 3, 7, 4, 1, 9, 8, 6, 2])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
})