export default function randomNumber(min, max) {

    if(typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Arg need to be a number!');
    }

    if(min > max) {
        throw new RangeError('Min value has to be higher than max!');
    }

    return Math.round(Math.random() * (max - min)) + min;
}