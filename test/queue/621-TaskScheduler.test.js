import Test from '../../code/queue/621-TaskScheduler.js'

test('TaskScheduler', () => {
    expect(Test(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8)
    expect(Test(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'], 2)).toBe(8)
})