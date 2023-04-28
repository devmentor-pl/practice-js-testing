export default function randomNumber(min, max) {
  const number = Math.floor(Math.random() * min) + max;

  if (typeof min !== "number") {
    throw new Error(`Property have to be a number`);
  }

  return number;
}
