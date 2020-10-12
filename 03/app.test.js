import randomArray from './app';

describe('randomArray() function', () => {
    describe('checking entry parameters', () => {

        // beforeAll(() => console.log('Tests are about to start'));
        // afterAll(() => console.log('Tests are finished')); // own reference
        
        // we should not test that a method exists, we should test what a method does
        it('checks if function exists', () => {
            expect(randomArray).toBeDefined();
        });

        it('throws if min or max is undefined', () => {
            const min = 3;
            const max = undefined;

        expect(() => randomArray(min, max)).toThrow('min and max must be defined!');

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

        it('checks if array has a lenght of min', () => {
            const min = 4;
            const max = 5;
            const outputArray = [5, 5, 5, 5, 5];
            expect(randomArray(min, max).length).toBe(min+1)
        });
        
        it('no parameters passed should return null', () => {
            expect(() => randomArray()).toThrow();
        });
    })
});