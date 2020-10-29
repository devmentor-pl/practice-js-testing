export default function randomNumber(min, max) {
  if (typeof min === "undefined") {
    throw new Error("Min argument not provided.");
  }

  if (typeof max === "undefined") {
    throw new Error("Max argument not provided.");
  }

  if (typeof min !== "number") {
    throw new TypeError("Min argument must be a number.");
  }

  if (typeof max !== "number") {
    throw new TypeError("Max argument must be a number.");
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}
