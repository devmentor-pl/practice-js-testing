import randomNumber from './app.js'

it('return 0 if min=0 and max=0', ()=> {
    expect(randomNumber(0, 0)).toBe(0)
})