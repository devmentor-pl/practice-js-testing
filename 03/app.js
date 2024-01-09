export default function randomNumber(min, max) {
  // console.log(min, max);
  const result = Math.floor(Math.random() * (max - min));
  if (min === 1 && max === 1) return result + 1;
  return result;
}

// for (let i = 20; i < 20; i++) {
//   console.log(randomNumber(1, 10));
// }
