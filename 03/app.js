export default function randomNumber(min, max) {
  if (typeof max !== 'number') {
    throw new Error('Property have to be a number');
  }
  if (min > max) {
    throw new Error('min number is grater than max');
  }

  const randomNum = Math.floor(Math.random() * (max - min)) + 1;

  return randomNum;
}
