export default function randomNumber(min, max) {
    if (typeof min !== 'number' && !Number.isNaN(min)) {
        throw new Error('minimal value is not a number!')
    }
    if (typeof max !== 'number' && !Number.isNaN(max)) {
        throw new Error('maximal value is not a number!')
    }
    if (min > max) {
        throw new Error('max value needs to be higher than min!')
    }
    const number = Math.floor(Math.random() * (max - min) + min)
    return number

}