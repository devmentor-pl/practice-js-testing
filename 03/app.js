export default function randomNumber(min, max) {
  const randomNum = Math.random() * (max - min) + min;
  return randomNum;
}
