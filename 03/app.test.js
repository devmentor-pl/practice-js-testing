import randomNumber from "./app";
let x;

// test("sprawdzenie czy jest WYNIK Z podanego PRZEDZIAŁU", () => {
//   x = randomNumber(1, 10);
//   const checkRange = (x) => {
//     if (x >= 0 && x <= 10) return true;
//   };
//   expect(true).toBe(Boolean(checkRange(x)));
// });

// test("sprawdzenie danych wejściowych: 1,1", () => {
//   x = randomNumber(1, 1);
//   const checkOnes = (x) => {
//     if (x === 1) return true;
//   };
//   expect(true).toBe(Boolean(checkOnes(x)));
// });

// test("sprawdzenie czy podano TYP NUMBER", () => {
//   x = randomNumber(20, 30);
//   expect(true).toBe(Boolean(x));
// });

test("sprawdzenie czy podano PRAWIDLOWY ZAKRES", () => {
  x = randomNumber(20, 30);
  expect(true).toBe(Boolean(x));
});

/*-----------------

min. 3 testy!
Funkcja ma generować losową liczbę z podanego przez usera przedziału

input: 
-2 argumenty: min number, max number

output:
-zwracać 1 liczbę całkowitą

testy:
- jeśli przedział odwrotny (min=5, max=2) to zwróć błąd

*/
