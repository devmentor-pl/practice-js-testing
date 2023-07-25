export default function randomNumber(min, max) {
  const drawnNumer = Math.floor(Math.random() * (max - min + 1)) + min;
  if (typeof min !== "number") {
    throw new Error("Property min have to be a number");
  }
  if (typeof max !== "number") {
    throw new Error("Property max have to be a number");
  }
  if (max < min) {
    throw new Error("Property min is higher than propety max");
  } else {
    return drawnNumer;
  }
}
