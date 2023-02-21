export default randomNumber = (min, max) => {
    if (isValidRange(min, max)) {
        if (isMinValueValid(min) && isMaxValueValid(max)) {
            const result = Math.random() * (max - min) + min;

            return result;
        }
    }
}

function isMinValueValid(min) {
    if (typeof min !== 'number') throw new Error(`Minimum value should be a number!`);
    else return true;
}

function isMaxValueValid(max) {
    if (typeof max !== 'number') throw new Error(`Maximum value should be a number!`);
    else return true;
}

function isValidRange(min, max) {
    if (min > max) throw new Error('Invalid range!');
    else return true;
}