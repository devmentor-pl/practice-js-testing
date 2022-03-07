import randomNumber from './app';
// 
// jeśli losujesz liczbę z przedzialu od 1 do 1, to funkcja zwróci 1,

it('return 1 when randomized numbers are in the range 1 and 1' , () => {

    expect(randomNumber(1, 1)).toBe(1);

});