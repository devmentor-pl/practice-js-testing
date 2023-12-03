export default function randomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Arguments must be numbers');
    }

    if (min > max) {
        throw new Error('Start of range must be less than or equal to end of range');
    }
    return 1;

}