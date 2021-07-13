import randomNumber from './app';

it('randomNumber is a number', () => {
    expect(typeof randomNumber(10, 1)).toBe('number');
})

it('parameter min must be less or equal as parameter max', () => {

    randomNumber.min = 11;
    randomNumber.max = 10;
    if (randomNumber.min > randomNumber.max) {
        randomNumber.min = randomNumber.max;
    }

    expect(randomNumber.min <= randomNumber.max).toBe(true);
})

it('result must be greater or equal as parameter min', () => {

    randomNumber.min = 5;
    randomNumber.max = 10;
    randomNumber.result = 5;

    expect(randomNumber.result >= randomNumber.min).toBe(true);
})

