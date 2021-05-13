import randomNumber from './app';

it('throws error if argument is not a number', () => {
    expect(() => randomNumber('0',0)).toThrow('Both arguments should be a number');
    expect(() => randomNumber(0,'0')).toThrow('Both arguments should be a number');
    expect(() => randomNumber('0','0')).toThrow('Both arguments should be a number');
})