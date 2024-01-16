export default function randomNumber(min, max) {
  // console.log("min to: " + typeof min, "max to: " + typeof max);
  let result = Math.floor(Math.random() * (max - min) + min);

  // czy min > max
  if (min > max) return false;

  // czy podano typ number
  if ((typeof min !== "number" || typeof max) !== "number") return false;

  // czy dla (1,1) otrzymamy 1
  if (min === 1 && max === 1) return result;

  // czy wynik jest z podanego przedziału
  if (result < min || result > max) return false;

  return result;
}
