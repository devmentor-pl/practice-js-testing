export default function randomNumber(min, max) {
  if (!areArgumentsPassed(min, max)) {
    throw new Error('No arguments were passed.')
  }
  if (min > max) {
    throw new Error('First argument must be lesser than the second one.')
  }
  if (isNaN(min)) {
    throw new Error('Argument must be a number.')
  }
  if (isNaN(max)) {
    throw new Error('Argument must be a number.')
  }
}

function areArgumentsPassed(...args) {
  return [...args].every(arg => typeof arg !== 'undefined')
}