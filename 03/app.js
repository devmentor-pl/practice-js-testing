export default function randomNumber(min, max) {
  if (isNaN(min) || isNaN(max)) {
    throw new Error("min or max is NaN");
  }
  return Math.random() * (max - min) + min;
}

randomNumber(1, 1);
