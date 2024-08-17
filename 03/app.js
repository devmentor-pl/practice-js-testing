export default function randomNumber(min, max) {
  if (isNumber(min)) {
    renderError("min");
  }

  if (isNumber(max)) {
    renderError("max");
  }

  const randomNum = Math.random() * (max - min) + min;
  return randomNum;
}

function isNumber(number) {
  return typeof number !== "number";
}

function renderError(value) {
  throw new Error(`The ${value} is not a number`);
}
