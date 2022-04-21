import randomNumber from './app';

it('throw error if "min" is not a number', () => {
    expect( () => randomNumber('1', 2) ).toThrow('"min" is not a number');
});

it('throw error if "max" is not a number', () => {
    expect( () => randomNumber(2, '1') ).toThrow('"max" is not a number');
});

it('return 1 if both arguments = 1', () => {
    expect( randomNumber(1, 1) ).toBe(1);
});

it('throw error if "min" greater than "max"', () => {
    expect( () => randomNumber(2,1) ).toThrow('"min" greater than "max"');
});

it('result smaller or equal "max"', () => {
    const result = randomNumber(1, 5)
    const smaller = result <= 5;
    expect(smaller).toBeTruthy();
});

it('result greater or equal "min"', () => {
    const result = randomNumber(1, 5)
    const greater = result >= 1;
    expect(greater).toBeTruthy();
});