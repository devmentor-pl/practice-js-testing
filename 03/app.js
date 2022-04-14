export default function randomNumber(min, max) {
    if(typeof min !== 'number') {
        throw new Error('"min" argument is not a number');
    }

    if(typeof max !== 'number') {
        throw new Error('argument "max" is not a number');
    }

    if(min === 1 && max === 1) {
        return 1;
    }

    if(min > max) {
        throw new Error('argument "min" greater than argument "max"');
    }

    return Math.random() * (max - min) + min;
}