import randomNumber from './app';


//Jeśli losujesz liczbę z przedzialu od 1 do 1 to funkcja zwróci 1

it('return 1 when randmized numbers are between 1 and 1' , () => {

    expect(randomNumber(1, 1)).toBe(1);
});


//Jeśli podasz jako argument "nie liczbę" to zostanie wyrzucony błąd
//Jeśli przedział będzie się wykluczał (podasz, że chcesz liczbę od 4 do 3, a nie od 3 do 4) to również zostanie zgłoszony błąd

it('return fail if property is not a number' , () => {

    function createNumber() {
        const min = 'number';
        const max = 4;
        randomNumber(min, max);
    }
    expect(createNumber).toThrow()
});

//Jeśli przekazane argumenty będą poprawne to sprawdzisz czy wylosowana liczba mieści się w zadanym przedziale.

it('return fail if max < min' , () => {

    function checkNumber () {
const min = 6;
const max = 3;
randomNumber(min, max);
    }
    expect(checkNumber).toThrow();
});