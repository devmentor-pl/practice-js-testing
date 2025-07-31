export default randomNumber = (min, max) => {
    if (isValidRange(min, max)) {
        if (!isValueValid(min)) {
            throw new Error(`Minimum value should be a number!`);
        }

        if (!isValueValid(max)) {
            throw new Error(`Maximum value should be a number!`);
        }

        const result = Math.random() * (max - min) + min;

        return result;
    }
}

function isValueValid(value) {
    if (isNaN(value)) return false;
    else return true;
}

function isValidRange(min, max) {
    if (min > max) throw new Error('Invalid range!');
    else return true;
}