import randomNumber from './app';
it('return 0 while prop min is the same as prop max', () => {
    function sameNumbers() {
        const min = 1;
        const max = 1;
        randomNumber(min, max);
    }
    expect(sameNumbers).toBe(0);
})