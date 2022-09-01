export default function randomNumber(min, max) {
    if (typeof min !== 'number') {
        throw new Error('first argument is not a number');
    };
    return Math.random() * (max - min) + min;
}