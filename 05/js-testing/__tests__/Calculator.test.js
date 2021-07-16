
// ./__tests__/Calculator.test.js

// test('1 + 1 = 2', () => {
//     expect(1 + 1).toBe(2);
// });

// test('3 + 2 = 5', () => {
//     expect(3 + 2).toBe(5);
// });

// test('33 * 33 = 1089', () => {
//     expect(33 * 33).toBe(1089);
// });

// const add = (a, b) => a + b;

// test('1 + 1 = 2', () => {
//     expect(add(1, 1)).toBe(2);
// });

// test('3 + 2 = 5', () => {
//     expect(add(3, 2)).toBe(5);
// });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const Calculator = require('./../src/Calculator');

// it('return 0 when prop num1 is not set', () => {
//     const calc = new Calculator();
//     expect(calc.num1).toBe(0);
// });

// it('return 0 when prop num2 is not set', () => {
//     const calc = new Calculator();
//     expect(calc.num2).toBe(0);
// });

// it('1 + 1 = 2', () => {
//     const calc = new Calculator(1, 1);
//     expect(calc.add()).toBe(2);
// });

// it('3 + 2 = 5', () => {
//     const calc = new Calculator(3, 2);
//     expect(calc.add()).toBe(5);
// });

// describe('Calculator', () => {
//     describe('Prop num1', () => {
//         it('return 0 when prop is not set', () => {
//             const calc = new Calculator();
//             expect(calc.num1).toBe(0);
//         });
//         it('return 4 when prop is set to 4 ...', () => {
//             const value = 4;
//             const calc = new Calculator(value);
//             expect(calc.num1).toBe(value);
//         });
//     // ...
//     });
//     describe('Prop num2', () => { /* ... */ });

//     describe('Method add()', () => {
//         it('return 7 when num1 = 4 and num2 = 3', () => {
//             const calc = new Calculator(4, 3);
//             const result = calc.add();
//             expect(result).toBe(7);
//         });
//     });
// });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// pdf 10_Devmentor od strony 110

// // ./__tests__/Calculator.test.js

// // FUNKCJA done() dla kodu asynchronicznego
// // Ponieważ teraz metoda .add() przyjmuje
// // funkcję jako argument, to taką funkcję tworzę
// // i wstawiam do niej parametr o nazwie result,
// // który będzie przechowywał wynik działania.
// // Pozostaje nam tylko wykonać porównanie
// // wyniku (result) z oczekiwaną wartością (3).
// // Na końcu uruchamiamy funkcję done(), która
// // informuje o zakończeniu działania kodu
// // asynchronicznego.

// import Calculator from './../src/Calculator';

// describe('Calculator', () => {

//     // scenario
//     it('Should return 3 when insert 1 and 2', done => {
//         // given
//         const calc = new Calculator(1, 2);
//         // when
//         calc.add(result => {
//             // then
//             expect(result).toBe(3);
//             done();
//         });
//     });

//     // scenario
//     it('Should return 0 when not insert numbers', done => {
//         // given
//         const calc = new Calculator();
//         // when
//         calc.add(result => {
//             // then
//             expect(result).toBe(0);
//             done();
//         });
//     });

//     // scenario
//     it('Should throw exception when insert not a number', () => {
//         // given
//         function createCalc() {
//             // when
//             new Calculator('X');
//             new Calculator(undefined, 'X');
//             new Calculator(undefined, undefined);
//         }
//         // then
//         expect(createCalc).toThrow();
//     });

// });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// pdf 10_Devmentor od strony 120

// Lepszym rozwiązaniem dla kodu
// asynchronicznego jest użycie obietnicy (ang. Promise).
// Modyfikuję nasze rozwiązanie w taki sposób,
// aby asynchroniczność została
// zaimplementowana właśnie przez obietnicę.
// Zwróć uwagę, że parametr w .add() nie jest mi
// już potrzebny, a samą obietnicę (promise) zwracamy.

// import Calculator from './../src/Calculator';

// describe('Calculator', () => {

//     // scenario
//     it('Should return 3 when insert 1 and 2', () => {
//         // given
//         const calc = new Calculator(1, 2);
//         // when
//         const promise = calc.add();
//         // then
//         return promise.then(result => {
//             expect(result).toBe(3);
//         });
//     });

//     // scenario
//     it('Should return 0 when not insert numbers', () => {
//         // given
//         const calc = new Calculator();
//         // when
//         const promise = calc.add();
//         // then
//         return promise.then(result => {
//             expect(result).toBe(0);
//         });
//     });

//     // scenario
//     it('Should throw exception when insert not a number', () => {
//         // given
//         function createCalc() {
//             // when
//             new Calculator('X');
//             new Calculator(undefined, 'X');
//             new Calculator(undefined, undefined);
//         }
//         // then
//         expect(createCalc).toThrow();
//     });

// });


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// pdf 10_Devmentor od strony 123

// Ostatnim elementem, jaki chciałbym Ci
// zaprezentować, jest składnia async ... await.
// Jak wiesz, pozwala ona wskazać strukturę
// z kodem asynchronicznym i miejsce, w którym
// należy na wykonanie tego kodu "poczekać".

// ./__tests__/Calculator.test.js
import Calculator from './../src/Calculator';

describe('Calculator', () => {
    
    // scenario
    it('Should return 3 when insert 1 and 2', 
    async () => {
        // given
        const calc = new Calculator(1, 2);
        // when
        const result = await calc.add();
        // then
        expect(result).toBe(3);
    });

    // scenario
    it('Should return 0 when not insert numbers',
    async () => {
        // given
        const calc = new Calculator();
    // when
    const result = await calc.add();
    // then
    expect(result).toBe(0);
    });

    // scenario
    it('Should throw exception when insert not a number', () => {
        // given
        function createCalc() {
            // when
            new Calculator('X');
            new Calculator(undefined, 'X');
            new Calculator(undefined, undefined);
        }
        // then
        expect(createCalc).toThrow();
    });

    // scenario
    it('Should reject when divide by 0', () => {
        // expect.assertions(1);
        // given
        const calc = new Calculator(2, 0);
        // when
        return calc.divide().catch(err => {
            // then
        expect(err.message).toBe('Division by 0!');
        });
    });

});


