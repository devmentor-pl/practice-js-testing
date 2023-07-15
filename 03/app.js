export default function randomNumber(min, max) {
    if (typeof min !== 'number') {
        throw new Error('Property "min" has to be a number')
    }

    if (typeof max !== 'number') {
        throw new Error('Property "max" has to be a number')
    }

    if (min > max) {
        throw new Error('"Max" property has to be greater than "min" property')
    }

    const randomNumber = Math.random() * (max - min) + min
    return randomNumber
}