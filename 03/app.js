export default function randomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}