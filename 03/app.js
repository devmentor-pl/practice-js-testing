export default randomNumber = (min, max) => {
    if (areNotNumbers(min, max)) {
        throw new Error('Min or max is not a number!');
    }

    return Math.random() * (max - min) + min;
}

function areNotNumbers(min, max) {
    if (isNaN(min) || isNaN(max)) return true;
    else return false;
}