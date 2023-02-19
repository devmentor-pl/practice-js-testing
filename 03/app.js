export default randomNumber = (min, max) => {
    checkArguments(min, max)

    return Math.random() * (max - min) + min;
}

function checkArguments(min, max) {
    if (!areNumbers(min, max)) {
        throw new Error('Min or max is not a number!');
    }

    if (!isValidRange(min, max)) {
        throw new Error('Min value should be smaller than max value.');
    }
}

function areNumbers(min, max) {
    if (isNaN(min) || isNaN(max)) return false;
    else return true;
}

function isValidRange(min, max) {
    if (min > max) return false;
    else return true;
}