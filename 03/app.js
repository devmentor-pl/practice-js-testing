export default function randomNumber(min, max) {
    if(typeof min !== 'number' && !Number.isNaN(min)) {
        throw new Error('"min" must be a number')
    }

    if(typeof max !== 'number' && !Number.isNaN(max)) {
        throw new Error('"max" must be a number')
    }

    return Math.random() * (max - min) + min
}