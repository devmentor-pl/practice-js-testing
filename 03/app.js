export default function randomNumber(min, max) {
  checkIfNumber(max);
  checkScope(min, max);
  const randomNum = Math.floor(Math.random() * (max - min)) + 1;

  return randomNum;
}

function checkIfNumber(max) {
  if (typeof max !== 'number') {
    throw new Error('Property have to be a number');
  }
}

function checkScope(min, max) {
  if (min > max) {
    throw new Error('min number is grater than max');
  }
}
