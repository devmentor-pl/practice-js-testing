export default function randomArray(min, max) {

    // creates
    if (min === undefined || max === undefined) {
        return null;
    }

    if (min <= 0) {
        throw new RangeError('min cannot be lower than zero')
    }

    if (typeof min === 'number' && typeof max === 'number') {
        const array = [];
        for (let i = 0; i <= min; i++) {
            array.push(max);
        }
        return array;
    }
};