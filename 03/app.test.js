import randomNumber from './app';
// 
// jeśli losujesz liczbę z przedzialu od 1 do 1, to funkcja zwróci 1,

it('return 1 when randomized numbers are in the range 1 and 1' , () => {

    expect(randomNumber(1, 1)).toBe(1);

});

/* jeśli podasz jako argument "nie liczbę", to zostanie rzucony błąd, */

it('throws an error if one of the arguments is NaN', () => {
    function checkNumbers() {
        randomNumber('NaN', 5);
    }
    expect(checkNumbers).toThrow()
}) 

// jeśli przedział będzie się wykluczał (podasz, że chcesz liczbę od 4 do 3, a nie od 3 do 4), to również zostanie rzucony błąd

it('throws an error if max number is lower than min' , () => {

    function checkNumbers () {
        randomNumber(5, 1);
    }
    expect(checkNumbers).toThrow();
});

// jeśli przekazane argumenty będą poprawne, to sprawdzisz, czy wylosowana liczba mieści się w zadanym przedziale

it('throws an error if the returned number is not within the given range', () => {
    function isWithinRange () {
        randomNumber(4, 7);
    }
    expect(isWithinRange).toThrow
});