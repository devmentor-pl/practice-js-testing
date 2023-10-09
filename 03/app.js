export default function randomNumber(min, max) {
  if (typeof min === "undefined" || typeof max !== "number") {
    return 0;
  }

  if (max < 0 || min < 0) {
    return 0;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error(
        'Property have to be a number'
    );
}

  if (min === 1 && max === 1) {
    return 1;
  }

  if (min > max) {
    throw new Error("Max need to be greater than min!");
  }


  const randomNum = Math.floor(Math.random() * (max - min) + min);
  return randomNum;
}
