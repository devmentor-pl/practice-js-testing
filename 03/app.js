export default function randomNumber(min, max) {
  if (isNumber(min)) {
    renderError("min");
  }

  if (isNumber(max)) {
    renderError("max");
  }

  if (min > max) throw new Error("The min sie bigger than max");

  const randomNum = Math.random() * (max - min) + min;

  if (randomNum > max || randomNum < min)
    throw new Error("The random number is out of range");
  return randomNum;
}

function isNumber(number) {
  return typeof number !== "number" || Number.isNaN(number);
}

function renderError(value) {
  throw new Error(`The ${value} is not a number`);
}
