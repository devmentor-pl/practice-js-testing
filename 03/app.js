export default function randomNumber(min, max) {
    if (typeof min !== 'number') {
        throw new Error ('show error if not a number');
    }



    return Math.random() *(min - max) +min;
}