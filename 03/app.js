export default function randomNumber(min, max) {

if(isNaN(min) || isNaN(max)) {
  throw new Error('The argument cannot be NaN')
}

if(min > max) {
  throw new Error('The first argument cannot be greater than the second argument')
}

  return  Math.floor(Math.random() * (max - min +1)) + min;
}