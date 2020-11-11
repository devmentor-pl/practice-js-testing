export default function randomNumber(min, max) {
  if (typeof min === 'undefined' && typeof max === 'undefined') {
    throw new Error('No arguments were passed.')
  }
}