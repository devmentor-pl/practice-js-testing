export default function randomNumber(min, max) {
  if (min === undefined || max === undefined) {
    throw new Error("No arguments provided");
  }

  if (min > max) {
    throw new Error("Min must be greater than max");
  }
}
