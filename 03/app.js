export default function randomNumber(min, max) {
  if (typeof min !== "number") {
    throw new Error("The min is not a number");
  }

  if (typeof max !== "number") {
    throw new Error("The max is not a number");
  }

  const randomNum = Math.random() * (max - min) + min;
  return randomNum;
}
