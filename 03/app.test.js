

import randomNumber from './app';

test('random number 1 to 1 ', () => {
    const random = randomNumber(1,1)
   expect(random).toBe(1);
});

test('nieliczba', () => {
expect(() => randomNumber('a',3)).toThrow();
})