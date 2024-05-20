export default function randomNumber(min, max) {
  checkIfNumber(min, max);
  checkScope(min, max);
  const randomNum = Math.floor(Math.random() * (max - min)) + 1;

  return randomNum;
}

function checkIfNumber(min, max) {
  if (typeof min !== 'number') {
    throw new Error('Property min have to be a number');
  }
  if (typeof max !== 'number') {
    throw new Error('Property max have to be a number');
  }
}

function checkScope(min, max) {
  if (min > max) {
    throw new Error('min number is grater than max');
  }
}
