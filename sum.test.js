const sum = require('./sum');

test('Sum Function', () => {
    expect(sum(3, 2)).toBe(5);
});