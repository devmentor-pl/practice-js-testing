
// ./src/Calculator.js


// pdf 10_Devmentor przed stroną 115

// class Calculator {
//     constructor(num1Value = 0, num2Value = 0) {
//         this.setProp('num1', num1Value);
//         this.setProp('num2', num2Value);
//     }

//     // ustawia wskazany parametr, jeśli jest on poprawny, jeśli nie jest poprawny, rzuca wyjątkiem
//     setProp(propName, value) {
//         if (typeof value !== 'number') {
//             throw new Error('Property have to be a number');
//         }
//         this[propName] = value;
//     }

//     add() {
//         const {num1, num2} = this;
//         return num1 + num2;
//     }
// }

//     module.exports = Calculator;


// pdf 10_Devmentor od strony 115: testy kodu asynchronicznego

// class Calculator {
//     constructor(num1Value = 0, num2Value = 0) {
//         this.setProp('num1', num1Value);
//         this.setProp('num2', num2Value);
//     }

//     // ustawia wskazany parametr, jeśli jest on poprawny, jeśli nie jest poprawny, rzuca wyjątkiem
//     setProp(propName, value) {
//         if (typeof value !== 'number') {
//             throw new Error('Property have to be a number');
//         }
//         this[propName] = value;
//     }

//     add(callback) {
//         const {num1, num2} = this;

//         setTimeout(() => {
//             callback(num1 + num2);
//         }, Math.random() * 90 + 10);
//     }
// }

// export default Calculator;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// pdf 10_Devmentor od strony 120

// Lepszym rozwiązaniem dla kodu
// asynchronicznego jest użycie obietnicy (ang. Promise).
// Modyfikuję nasze rozwiązanie w taki sposób,
// aby asynchroniczność została
// zaimplementowana właśnie przez obietnicę.
// Zwróć uwagę, że parametr w .add() nie jest mi
// już potrzebny, a samą obietnicę (promise) zwracamy.
// Tym razem testy również nie przechodzą.

class Calculator {
    constructor(num1Value = 0, num2Value = 0) {
        this.setProp('num1', num1Value);
        this.setProp('num2', num2Value);
    }

    // ustawia wskazany parametr, jeśli jest on poprawny, jeśli nie jest poprawny, rzuca wyjątkiem
    setProp(propName, value) {
        if (typeof value !== 'number') {
            throw new Error('Property have to be a number');
        }
        this[propName] = value;
    }

    add() {
        const {num1, num2} = this;
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(num1 + num2);
            }, Math.random() * 90 + 10);
        });

        return promise;

    }

    divide() {
        const {num1, num2} = this;
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (num2 === 0) {
                    reject(new Error('Division by 0!'));
                } else {
                    resolve(num1 + num2);
                }
            }, Math.random() * 90 + 10);
        });
        return promise;
    }

}

export default Calculator;
