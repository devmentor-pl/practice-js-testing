import randomNumber from "./app";

describe("My first TEST! - test randomNumber() function", () => {
  test("sprawdzenie czy podano PRAWIDLOWY ZAKRES", () => {
    expect(randomNumber(10, 30)).toBeTruthy();
  });

  test("sprawdzenie danych wejściowych: (1, 1)", () => {
    expect(randomNumber(1, 1)).toBe(1);
  });

  test("sprawdzenie czy podano TYP NUMBER", () => {
    expect(randomNumber(20, 40)).toBeTruthy();
  });

  test("sprawdzenie czy jest WYNIK Z podanego PRZEDZIAŁU", () => {
    expect(randomNumber(1, 10)).not.toBe(false);
  });

  test("sprawdzenie czy podano 2 LICZBY", () => {
    expect(randomNumber(10, 10)).toBeTruthy();
  });
});
