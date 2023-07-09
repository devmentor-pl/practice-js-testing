export default function randomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Property has to be a number')
    }

    if (min > max) {
        throw new Error('Max property has to be greater than min property')
    }

    const randomNumber = Math.random() * (max - min) + min
    return randomNumber
}