import randomNumber from './app';

it('return null if parameter isn\'t a number', () => {
    const notNumber = '01';
    expect(randomNumber(notNumber, 0)).toBe(null);
    expect(randomNumber(0, notNumber)).toBe(null);
    expect(randomNumber(notNumber, notNumber)).toBe(null);
});

