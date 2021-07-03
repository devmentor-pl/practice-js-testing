export default function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    if (min > max) {
        max = min;
    }
    if ((typeof min !== 'number' || isNaN(min)) && (typeof max === 'number' && !isNaN(max))) {
        min = max;
    }
    if ((typeof max !== 'number' || isNaN(max)) && (typeof min === 'number' && !isNaN(min))) {
        max = min;
    }
    if ((typeof min !== 'number' || isNaN(min)) && (typeof max !== 'number' || isNaN(max))) {
        min = 1;
        max = 1;
    }

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (min === max && result !== min) {
        throw new RangeError('If \"min\" and \"max\" are equal, \"result\" must be equal \"min\" and \"max\"');
    };
    if (min > max) {
        throw new RangeError('\"min\" cannot be bigger than \"max\"!');
    };
    if (typeof min !== 'number' || isNaN(min) || typeof max !== 'number' || isNaN(max)) {
        throw new RangeError('\"min\" and \"max\" must be numbers!');
    };
    if (result < min || result > max) {
        throw new RangeError('\"result\" cannot be smaller than \"min\" and \"result\" cannot be bigger than \"max\"!');
    };
    
    return result;
}

console.log('Testing randomNumbers');
for (let i = 1; i < 21; i++) {
    console.log(`Result ${i}:  ${randomNumber('8', '11')}`);
}
