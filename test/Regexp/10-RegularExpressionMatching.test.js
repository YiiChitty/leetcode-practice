import Test from '../../code/Regexp/10-RegularExpressionMatching.js'

test('Test', () => {
    expect(Test('aa', 'a')).toBe(false);
    expect(Test('aa', 'a*')).toBe(true);
    expect(Test('ab', '.*')).toBe(true);
    expect(Test('aab', 'c*a*b')).toBe(true);
    expect(Test('mississippi', 'mis*is*p*.')).toBe(false);
})