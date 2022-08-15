export default function randomNumber(min, max) {
    if(typeof min !== 'number') {
        throw new Error('Arg must be a number!')
    }
    return Math.random() * (max - min) + min;
}

