export default function randomNumber(min = 0, max = 0) {
    if (typeof min !== 'number') {
        throw new Error('Property is not a number')
    }
    return Math.floor(Math.random() * (max - min)) + min
}