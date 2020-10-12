export default function randomArray(min, max) {

    // creates
    if (min === undefined || max === undefined) {
        throw new RangeError('min and max must be defined!')
    }

    if (min <= 0 || max <= 0) {
        throw new RangeError('min cannot be lower than zero or zero')
    }

    if (typeof min === 'number' && typeof max === 'number') {
        const array = [];
        for (let i = 0; i <= min; i++) {
            array.push(max);
        }
        return array;
    } else {
        throw new Error('Min and max must be numbers!')
    }
};