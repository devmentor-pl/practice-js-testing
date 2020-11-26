export default function randomNumber(min, max) {
    isMinAndMaxOK(min, max)
}

function isMinAndMaxOK(min, max) {
    if(typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('min and max must be a number')
    } else if(max <= min) {
        throw new Error('max must be grater than min')
    }
}