export default function randomNumber(min, max) {
    if (min === max) {
        return min;
    }
    if (isNaN(min) || isNaN(max)) {
        throw new Error('Property have to be number');
    }
    if (min > max) {
        throw new Error('Wrong range');
    }
   
    return Math.floor(Math.random() * (max - min) + max)
}
