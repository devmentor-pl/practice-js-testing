import randomNumber from './app';

it('min=1 and max=1 returns 1', () => {
    expect( randomNumber(1,1) ).toBe(1)
})