export default randomNumber = (min, max) => {
    if (areArgumentsValid(min, max)) {
        const result = Math.random() * (max - min) + min;

        return result;
    }
}

function areArgumentsValid(min, max) {
    if (!areNumbers(min, max)) {
        throw new Error('Min and max should be a number!');
    }
    if (!isValidRange(min, max)) {
        throw new Error('Min value should be smaller than max value.');
    }

    return true;
}

function areNumbers(min, max) {
    if (isNaN(min) || isNaN(max)) return false;
    else return true;
}

function isValidRange(min, max) {
    if (min > max) return false;
    else return true;
}