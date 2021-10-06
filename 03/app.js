export default function randomNumber(min, max) {

    if(min === max) {
        return min;
    }


    if(typeof min !== 'number' || typeof max !=='number') {
        throw new Error('Property have to be a number');
    }


    if(max < min) {
        throw new Error('max must be bigger than min')
    }
}