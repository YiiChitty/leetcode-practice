import Test from '../../code/Recur/93-RestoreIPAddresses.js'

test('RestoreIPAddresses', () => {
    expect(Test("25525511135")).toEqual(["255.255.11.135", "255.255.111.35"])
})