export default function randomNumber(min, max) {
  validateArguments(min, max);
  return Math.random() * (max - min) + min;
}

function validateArguments(min, max) {
  if (typeof min !== 'number') {
    throw new Error('min is not a number');
  }
  if (typeof max !== 'number') {
    throw new Error('max is not a number');
  }
  if (min > max) {
    throw new Error('range is mutually exclusive');
  }
}
