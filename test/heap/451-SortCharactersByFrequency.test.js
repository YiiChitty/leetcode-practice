import Heap from '../../code/heap/451-SortCharactersByFrequency'

test('heap1', () => {
    let heap = new Heap("chcaa")
    expect(heap.toString()).toMatch(/ccaah|aacch/);
})