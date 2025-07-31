export default function randomNumber(min, max) {
    if (!isANumber(min)) {
        throw new Error('first argument is not a number');
    };
    if (!isANumber(max)) {
        throw new Error('second argument is not a number');
    };
    if (min > max) {
        throw new Error('first argument cannot be grater than second argument');
    };


    return Math.random() * (max - min) + min;
};

function isANumber(value) {
    return typeof value === 'number' && !Number.isNaN(value)
};