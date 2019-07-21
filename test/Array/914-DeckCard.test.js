import DeckCard from '../../code/Array/914-DeckCard.js'

test('DeckCard in group:[1,2,3,4,4,3,2,1]', () => {
    expect(DeckCard([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
})
test('DeckCard in group:[1,1,1,2,2,2,3,3]', () => {
    expect(DeckCard([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false)
})
test('DeckCard in group:[1,1,2,2,2,2]]', () => {
    expect(DeckCard([1, 1, 2, 2, 2, 2])).toBe(true)
})