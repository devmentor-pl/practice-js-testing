export default function randomNumber(min, max) {
  if (min === 1 && max === 1) return 1;
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('The entered data must be numbers.');
  }
  if (min > max) {
    throw new Error("Min number can't be greater than max number.");
  }
  return Math.random() * (max - min) + min;
}
