export default function randomNumber(min, max) {
  if (!isNumber(min) || !isNumber(max)) {
    throw new TypeError('The entered data must be numbers.');
  }
  if (min === max) return min;
  if (min > max) {
    throw new Error("Min number can't be greater than max number.");
  }
  return Math.random() * (max - min) + min;
}

function isNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}
