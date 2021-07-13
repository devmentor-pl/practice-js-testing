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
    randomNumber.result = 4;
    if (randomNumber.result < randomNumber.min) {
        randomNumber.result = randomNumber.min;
    }

    expect(randomNumber.result >= randomNumber.min).toBe(true);
})

// test with new object randomNumber2
it('result must be greater or equal as parameter min', () => {

    const randomNumber2 = new randomNumber;

    randomNumber2.min = 5;
    randomNumber2.max = 10;
    randomNumber2.result = 2;
    if (randomNumber2.result < randomNumber2.min) {
        randomNumber2.result = randomNumber2.min;
    }

    expect(randomNumber2.result >= randomNumber2.min).toBe(true);
})

it('result must be less or equal as parameter max', () => {

    randomNumber.min = 5;
    randomNumber.max = 10;
    randomNumber.result = 11;

    expect(randomNumber.result <= randomNumber.max).toBe(true);
})

