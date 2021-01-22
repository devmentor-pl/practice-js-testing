import randomNumber from './app';



/* test('randomNumber', () => {

    expect(typeof randomNumber('1', '2')).toBe('number')
}) */

test('randomNumber without parameters', () => {

    expect(randomNumber()).toBeFalsy()
})
