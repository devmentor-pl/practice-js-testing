export default function randomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error('Both arguments must be integers');
    }
    if (min > max) {
        throw new Error('Invalid input: The "min" argument must be less than or equal to the "max" argument.');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}