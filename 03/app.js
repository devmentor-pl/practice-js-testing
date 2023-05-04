export default function randomNumber(min, max) {
  const number = Math.floor(Math.random() * min) + max;

  if (typeof min !== "number") {
    throw new Error(`Property have to be a number`);
  }

  if (typeof max !== "number") {
    throw new Error(`Property have to be a number`);
  }

  if (min > max) {
    throw new Error(`min cant be greater than max`);
  }

  return number;
}
