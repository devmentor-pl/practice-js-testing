export default function randomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
    throw new Error(
      'Invalid input. Min and max values must be numbers, and max have to be greater than min'
    );
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
