export default function randomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Property has to be a number')
    } 

    const randomNumber = Math.random() * (max - min) + min
    return randomNumber
}