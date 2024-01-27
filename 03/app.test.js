import randomNumber from './app';

test('Losowanie z przedziału od 1 do 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
  });
  
  test('Podanie "nie liczby" jako argumentu', () => {
    expect(() => randomNumber('abc', 10)).toThrow('Podane argumenty nie są liczbami');
  });
  
  test('Przedział się wyklucza', () => {
    expect(() => randomNumber(4, 3)).toThrow('Przedział jest nieprawidłowy');
  });