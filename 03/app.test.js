import randomNumber from './app';

it('randomNumber is a number', () => {
    expect(typeof randomNumber(10, 1)).toBe('number');
})

it('parameter min must be smaller or equal as parameter max', () => {
    min = 10;
    max = 1;
    expect(min <= max).toBe(true);
})
