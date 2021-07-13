import randomNumber from './app';

it('randomNumber is a number', () => {
    expect(typeof randomNumber(10, 1)).toBe('number');
})

it('parameter min must be smaller or equal as parameter max', () => {
    randomNumber.min = 10;
    randomNumber.max = 10;
    expect(randomNumber.min <= randomNumber.max).toBe(true);
})
