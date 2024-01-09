export default function randomNumber(min, max) {
  const randomNum = Math.floor(Math.random() * (max - min)) + 1;
  return randomNum;
}
