import randomNumber from './app';

it('randomNumber is a number', () => {

    const min = 1;
    const max = 10;

    expect(typeof randomNumber(min, max)).toBe('number');

})

