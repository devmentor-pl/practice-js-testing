export default function randomNumber(min, max) {
  if (min === undefined) {
    throw new Error("First param must be given!");
  }
  if (max === undefined) {
    throw new Error("Second param must be given!");
  }
  const parsedMin = Number(min);
  const parsedMax = Number(max);
  if (typeof parsedMin !== "number" || !Number.isFinite(Number(parsedMin))) {
    throw new Error("First param must be a number!");
  }
  if (typeof parsedMax !== "number" || !Number.isFinite(Number(parsedMax))) {
    throw new Error("Second param must be a number!");
  }
  if (parsedMin > parsedMax) {
    throw new Error("First param must be lower than second!");
  }
  return Math.random() * (parsedMax - parsedMin) + parsedMin;
}
