export default randomNumber = (min, max) => {
    if (isNaN(min) || isNaN(max)) {
        throw new Error('Min or max is not a number!');
    }
    return Math.random() * (max - min) + min;
}