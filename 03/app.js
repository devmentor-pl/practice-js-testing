export default function randomNumber(min, max) {
  if (typeof min !== 'number') {
    throw new Error('Invalid input. Min value must be a number.');
  }
  if (typeof max !== 'number') {
    throw new Error('Invalid input. Max value must be a number.');
  }
  if (min > max) {
    throw new Error('Invalid input. Max value must be greater than min value.');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
