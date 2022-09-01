export default function randomNumber(min, max) {
    if (typeof min !== 'number') {
        throw new Error('first argument is not a number');
    };
    if (typeof max !== 'number') {
        throw new Error('second argument is not a number');
    };

    return Math.random() * (max - min) + min;
};