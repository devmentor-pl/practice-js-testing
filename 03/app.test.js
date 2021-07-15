import randomNumber from './app';

it('randomNumber is a number', () => {

    const min = 1;
    const max = 10;

    expect(typeof randomNumber(min, max)).toBe('number');

})

it('if min = 1 and max = 1 than result = 1', () => {

        const min = 1;
        const max = 1;
        
        expect(result).toBe(1);
    })    
