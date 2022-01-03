export default function randomNumber(min, max) {
  if (isNaN(min) || isNaN(max)) {
    throw new Error("min or max is NaN");
  }
  if (min > max) {
    throw new Error("min cannot be higher than max!");
  }
  return Math.random() * (max - min) + min;
}

randomNumber(1, 1);

// nie wiem czy to zadanie zostało wykonane prawidłowo, bo w pewnym momencie test wykonał się prawidłowo mimo braku jednego z powyzszych warunków. Będę wdzieczny za wskazówkę.:)
