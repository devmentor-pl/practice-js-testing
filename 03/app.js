export default function randomNumber(min, max) {
    if(typeof min !== 'number' && !Number.isNaN(min)) {
        throw new Error('"min" must be a number')
    }

    return Math.random() * (max - min) + min
}