export default function randomNumber(min, max) {
  // czy podano typ number
  const x = typeof min === "number";
  const y = typeof max === "number";
  if ((x || y) !== "number") console.log("błąd!!!");

  const result = Math.floor(Math.random() * (max - min) + min);

  // czy min > max
  if (min > max) return false;

  // czy dla (1,1) otrzymamy 1
  if (min === 1 && max === 1) return result;

  // czy wynik jest z podanego przedziału
  if (result < min || result > max) return false;

  return result;
}
