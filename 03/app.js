export default function randomNumber(min, max) {

    if( min === max) {
        return min
    }

    if(min > max) {
        throw new Error('value of min cannot be greater than value of max')
    }

    if((typeof min !== 'number') && (typeof max !== 'number')) {
        throw new Error('given value is not a number')
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}