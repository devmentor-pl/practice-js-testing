export default function randomNumber(min, max) {
    if (!isVariableValid(min) || !isVariableValid(max)) {
        throw new Error('Both arguments have to be a number');
    }

    if (min > max) {
        throw new RangeError('max has to be greater than min!');
    }

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isVariableValid(variable, type = 'number') {
    return (typeof variable === type && !Number.isNaN(variable));
}