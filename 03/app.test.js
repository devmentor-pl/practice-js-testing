import RanNum from './app';



/* test('randomNumber', () => {

    expect(typeof randomNumber('1', '2')).toBe('number')
}) */

/*test('randomNumber without parameters', () => {

    expect(randomNumber()).toBeDefined()
}) */
// wyczerpaly mi sie pomysly, taka implementacja jest chyba wystarczajaca
// czy po sprawdzeniu tego pierwszego bledu powinienem od razu implementowac ten if

test('randomNumber parameters', () => {
    const ranNum = new RanNum;
    expect(ranNum.max > ranNum.min).toBe(true)
}) 