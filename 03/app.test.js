import randomNumber from './app';

it('return 1 if min and max are set to 1', () => {
    const number = new randomNumber(1, 1)
    expect(number).toBe(1)
})