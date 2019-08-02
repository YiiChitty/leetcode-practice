import Ugly from '../../code/heap/313-SuperUglyNumber'

test('ugly1', () => {
    expect(Ugly.getPrimes(6)).toEqual([2, 3]);
    expect(Ugly.getPrimes(4)).toEqual([2]);
})

test('ugly1', () => {
    let ugly = new Ugly(12, [2, 7, 13, 19])
    expect(ugly.getAll()).toBe(32);
})