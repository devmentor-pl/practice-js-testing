import RanNum from './app';

/*test('is randomNumber a function', () => {
    const ranNum = new RanNum;
    expect(typeof ranNum.randomNumber(1, 2)).toBe('function')
}) */ 
// z pierwsza funckaj ceikawy problem, bo na poczatku sprawdzialem czy  jestr funkcja, potem stworzylem dla niej return
//podczas rozbudowy funkcji, i teraz zwraca number nie funkcje.


test('randomNumber numbers', () => {

    const ranNum = new RanNum;

    expect(typeof ranNum.randomNumber(1, 2)).toBe('number')
}) 



/*
test('randomNumber parameters', () => {
    

    expect(ranNum.max > ranNum.min).toBe(true)
}) */