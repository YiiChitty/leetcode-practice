import phonenum from '../../code/Array/17-PhoneNum.js'

test('phonenum:23', () => {
    expect(phonenum("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
})
test('phonenum:2', () => {
    expect(phonenum("2")).toEqual(["a", "b", "c"]);
})
test('phonenum:', () => {
    expect(phonenum("")).toEqual([]);
})