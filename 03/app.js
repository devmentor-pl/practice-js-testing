export default function randomNumber(min, max) {

    if(!isNumber(min)) {
        throwError('"min" is not a number')
    }

    if(!isNumber(max)) {
        throwError('"max" is not a number')
    }
  
    return Math.random() * (max - min) + min;

}
function isNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value);
}

function throwError(message) {
    throw new Error(message);

}