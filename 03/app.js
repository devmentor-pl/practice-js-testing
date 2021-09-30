export default function randomNumber(min, max) {
  if (isArgumentsProvided()) {
    throw new Error("No arguments provided");
  }

  if (isMinGreater()) {
    throw new Error("Min must be greater than max");
  }
}

function isArgumentsProvided() {
  return min === undefined || max === undefined ? true : false;
}

function isMinGreater() {
  return min > max ? true : false;
}
