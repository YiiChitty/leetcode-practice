import Test from "../../code/Recur/33- SubstringwithConcatenationofAllWords.js"

test('Substring with Concatenation of All Words', () => {
    expect(Test("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])).toEqual([]);
    expect(Test("barfoothefoobarman", ["foo", "bar"])).toEqual([0, 9]);
})