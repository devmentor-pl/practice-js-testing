export default function randomNumber(min, max) {
    if(isMinAndMaxOK(min, max)) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }
}

function isMinAndMaxOK(min, max) {
    if(typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('min and max must be a number')
    } else if(max <= min) {
        throw new Error('max must be grater than min')
    } else return true
}