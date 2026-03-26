export default function randomNumber(min, max) {
  if (typeof min !== 'number') {
    throw new Error('Zły typ danych w parametrze min')
  }
  if (typeof max !== 'number') {
    throw new Error('Zły typ danych w parametrze max')
  }
  if (min > max) {
    throw new Error('Źle ustawiony zakres funkcji randomNumber()')
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}