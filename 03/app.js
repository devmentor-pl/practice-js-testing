export default function randomNumber(min, max) {
  if(typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Arguments have to be numbers.');
  }
  if(min > max) {
    throw new RangeError("min can't be larger than max.");
  }

  const number = Math.abs(Math.random() * (max - min) - min);
  return number;
}