export default function randomNumber(min, max) {
  const number = Math.abs(Math.random() * (max - min) - min);
  return number;
}