export default function randomNumber(min, max) {
  // console.log(typeof min, typeof max);
  if ((typeof min !== "number" || typeof max) !== "number") return console.log("Podałeś dane typu 'string'");
  const result = Math.floor(Math.random() * (max - min) + min);
  if (min === 1 && max === 1) return result + 1;
  return result;
}
