export default function randomNumber(min, max) {
  if (typeof max !== "number") {
    throw new TypeError(`Argument max must be a number`);
  }
  if (typeof min !== "number") {
    throw new TypeError(`Argument min must be a number`);
  }
  if (min === max) {
    return min;
  }
}
