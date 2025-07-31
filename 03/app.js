export default function randomNumber(min, max) {
  if(typeof min !== "number" && typeof max !== "number") {
    throw new TypeError("Arguments has to be numbers.");
  }
  if (typeof min !== "number") {
    throw new TypeError("min has to be a number.");
  }
  if (typeof max !== "number") {
    throw new TypeError("max has to be a number.");
  }

  if (min > max) {
    throw new RangeError("min can't be larger than max.");
  }

  const number = Math.abs(Math.random() * (max - min) - min);
  return number;
}
