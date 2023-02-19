export default randomNumber = (min, max) => {
    if (areNotNumbers(min, max)) {
        throw new Error('Min or max is not a number!');
    }

    if(min > max){
        throw new Error('Min value should be smaller than max value.');
    }

    return Math.random() * (max - min) + min;
}

function areNotNumbers(min, max) {
    if (isNaN(min) || isNaN(max)) return true;
    else return false;
}