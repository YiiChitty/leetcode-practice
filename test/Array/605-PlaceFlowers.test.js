import placeflower from '../../code/Array/605-PlaceFlowers.js'

test('palseFlower:[1,0,0,0,1]', () => {
    expect(placeflower([1, 0, 0, 0, 1], 1)).toBe(true)
})
test('palseFlower:[1,0,0,0,1]', () => {
    expect(placeflower([1, 0, 0, 0, 1], 2)).toBe(false)
})
test('palseFlower:[1,0,0,0,1,0,0]', () => {
    expect(placeflower([1, 0, 0, 0, 1, 0, 0], 2)).toBe(true)
})