import randomNumber from './app.js'

it('throw Error if max is not defined', ()=> {
    expect(randomNumber(1, null)).toBe('max is not defined!')
})

it('throw Error if min is not defined', ()=> {
    expect(randomNumber(null, 1)).toBe('min is not defined!')
})
