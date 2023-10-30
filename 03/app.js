export default function randomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Arguments must be a number');
  }
  if (min > max) {
    throw new Error('Minimum value cannot be greater than maximum value');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
