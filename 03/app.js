export default function randomNumber(min, max) {
  if (!areArgumentsPassed(min, max)) {
    throw new Error('No arguments were passed.')
  }
  if (min > max) {
    throw new Error('First argument must be lesser than the second one.')
  }
  if (!areArgumentsNums(min, max)) {
    throw new Error('Argument must be a number.')
  }

  return parseInt(Math.random() * (max - min) + min)
}

function areArgumentsPassed(...args) {
  return [...args].every(arg => typeof arg !== 'undefined')
}
function areArgumentsNums(...args) {
  return [...args].every(arg => !isNaN(arg))
}
