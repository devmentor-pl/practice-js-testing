import randomNumber from './app';

test('returns 1 when the range is from 1 to 1', () => {
    const showNumber = randomNumber(1, 1);
    expect(showNumber).toBe(1);
});

test('return a radnom number in the range', () => {
    const min = 3
    const max = 4
    const number = randomNumber(min, max)

    expect(number).toBe(4)

})

test('throws an error when argument is not a number', () => {
    function generateRandomItem() {
        randomNumber("5");
    }

    expect(generateRandomItem).toThrow();
});