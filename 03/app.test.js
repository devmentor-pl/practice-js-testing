import randomNumber from './app';

test('Losowanie z przedziału od 1 do 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
  });
  

  test('Przedział się wyklucza', () => {
    expect(() => randomNumber(4, 3)).toThrow('Przedział jest nieprawidłowy');
  });