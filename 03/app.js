export default function randomNumber(min, max) {
  if (min > max || isNaN(min) || isNaN(max)) {
    throw new Error("Range is incorrect");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
