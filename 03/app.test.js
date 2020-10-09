import randomArray from './app';

describe('randomArray() function', () => {
    describe('checking entry parameters', () => {

        // beforeAll(() => console.log('Tests are about to start'));
        // afterAll(() => console.log('Tests are finished')); // own reference
        
        // we should not test that a method exists, we should test what a method does
        it('checks if function exists', () => {
            expect(randomArray).toBeDefined();
        });

        it('checks if two arguments passed to the function are type of number', () => {
            const min = 3;
            const max = 33;

            expect(typeof min).toBe('number'); // no need to check that
            expect(typeof max).toBe('number');
            // expect(randomNumber(min, max)).toBe(99);
        });
        it('should throw error when min is lower than 0', () => {
            const min = 0;
            const max = 6;
            // const arrResult = randomArray(min, max)
            // DOPIERO CALLBACK TUTAJ ZADZIAŁAŁ
            expect(() => randomArray(min, max)).toThrow();
        });
    });

    describe('randomArray return functionality', () => {
        it('checks if function returns object Array', () => {
            const min = 3;
            const max = 5;
            const outputArray = [5, 5, 5, 5];

            expect(randomArray(min, max)).toStrictEqual(outputArray);
        });
        it('no parameters passed should return null', () => {
            const min = undefined;
            const max = undefined;

            expect(randomArray(min, max)).toBe(null);
        });
    })
});