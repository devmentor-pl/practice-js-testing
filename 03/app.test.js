import randomNumber from './app';

/*describe('randomNumber', () => {
    describe('no parameters, passes', () => {
        const result = randomNumber();

        expect(result).toBeDefined();
    })
}) */

test('randomNumber', () => {

    expect(typeof randomNumber('1', '2')).toBe('number')
})