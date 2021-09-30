export default function randomNumber(min, max) {
  if (isArgumentsProvided(min, max)) {
    throw new Error("No arguments provided");
  }

  if (isMinGreater(min, max)) {
    throw new Error("Min must be greater than max");
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

function isArgumentsProvided(min, max) {
  return min === undefined || max === undefined ? true : false;
}

function isMinGreater(min, max) {
  return min > max ? true : false;
}
