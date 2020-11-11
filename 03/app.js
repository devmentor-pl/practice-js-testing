export default function randomNumber(min, max) {
  if (!areArgumentsPassed(min, max)) {
    throw new Error('No arguments were passed.')
  }
}

function areArgumentsPassed(...args) {
  return [...args].every(arg => typeof arg !== 'undefined')
}