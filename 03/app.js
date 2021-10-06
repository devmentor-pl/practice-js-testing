export default function randomNumber(min, max) {
  if (isArgumentsProvided(min, max)) {
    throw new Error("No arguments provided");
  }

  if (isMinGreater(min, max)) {
    throw new Error("Min must be greater than max");
  }

  if (isArgumentsValid(min, max)) {
    throw new Error("Arguments must be a numbers");
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

function isArgumentsValid(min, max) {
  return typeof min !== "number" && typeof max !== "number" ? true : false;
}
