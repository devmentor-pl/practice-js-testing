import randomNumber from "./app";
let x;

test("sprawdzenie czy jest wynik z podanego przedziału", () => {
  x = randomNumber(1, 10);
  console.log(x);
  const checkRange = (x) => {
    if (x >= 0 && x <= 10) return true;
  };
  expect(true).toBe(Boolean(checkRange(x)));
});

test("sprawdzenie danych wejściowych: 1,1", () => {
  x = randomNumber(1, 1);
  console.log(x);
  const checkOnes = (x) => {
    if (x === 1) return true;
  };
  expect(true).toBe(Boolean(checkOnes(x)));
});

// test("sprawdzenie czy podano typ number", () => {
//   x = randomNumber("4", "p");
//   console.log(x);
//   const isNumber = (x) => {
//     if (typeof x === "number") return true;
//   };
//   expect(true).toBe(Boolean(isNumber(x)));
// });

/*-----------------

min. 3 testy!
Funkcja ma generować losową liczbę z podanego przez usera przedziału

input: 
-typ: number
-2 argumenty: min number, max number

output:
-zwracać 1 liczbę całkowitą
-zwracać typ number

testy:
- min=1 max=1 ma zwrócić 1
- jeśli podam 'nie liczbę' to zwróć błąd
- jeśli przedział odwrotny (min=5, max=2) to zwróć błąd
- jeśli argum. poprawne to sprawdź czywynik jest z podanego zakresu 

*/
