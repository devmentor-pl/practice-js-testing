import randomNumber from './app';

it('if number min = 1 and number max = 1', () => {
    const randomNo = new randomNumber();
    expect(randomNo(1,1)).toBe(1);
})