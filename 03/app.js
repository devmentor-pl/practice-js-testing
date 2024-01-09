export default function randomNumber(min, max) {
  if (typeof max !== 'number') {
    throw new Error('Property have to be a number');
  }

  const randomNum = Math.floor(Math.random() * (max - min)) + 1;

  return randomNum;
}
