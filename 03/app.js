export default function randomNumber(min, max) {
    if(typeof min !== 'number') {
        throw new Error('"min" argument is not a number');
    }

    if(typeof max !== 'number') {
        throw new Error('"max argument is not a number');
    }
}