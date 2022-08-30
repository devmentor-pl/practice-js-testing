import randomNumber from './app';

it('throw error if any of parameters in not a number', ()=>{
    expect( () => randomNumber(undefined, 10).toThrow('Property have to be a number'))
});

it('throw error if min is bigger than max', () => {
    expect( () => randomNumber(3, 2).toThrow('Min cannot be bigger than max'));
});