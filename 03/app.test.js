import randomNumber from './app';

it('return null if parameter isn\'t a number', () => {
    const notNumber = '01';
    expect(randomNumber(notNumber, 0)).toBe(null);
    expect(randomNumber(0, notNumber)).toBe(null);
    expect(randomNumber(notNumber, notNumber)).toBe(null);
});

it('throw exception if min parameter is bigger than max', () => {
    let min = -1;
    let max = -2;
    expect(() => randomNumber(min, max)).toThrow();

    min = 100;
    max = 10;
    expect(() => randomNumber(min, max)).toThrow();
})
