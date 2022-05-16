export default function randomNumber(min, max) {

if(isNaN(min) || isNaN(max)) {
  throw new Error('The argument cannot be NaN')
}

  return  Math.floor(Math.random() * (max - min +1)) + min;
}