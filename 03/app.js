export default function randomNumber(min, max) {

    if (min === undefined || max === undefined) {
        return 0;
    }

    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error(
            'Property have to be a number'
        );
    }


    if (min > max || max < min) {
        throw new Error(
            'Variable min have to be lower then variable max'
        );
    }

    const value = Math.floor(Math.random() * (max - min)) + min
    return value;
}