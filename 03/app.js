export default function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    console.log(min)
    console.log(max)

    // both parameters must be numbers
    if (typeof min !== 'number' || isNaN(min) || typeof max !== 'number' || isNaN(max)) {
        console.log('Both parameters must be numbers!')
    }

    // parameter min must be less or equal as parameter max
    if (min > max) {
        min = max;
    }

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    // result must be greater or equal as parameter min
    if (result < min) {
        result = min;
    }

    // result must be less or equal as parameter max
    if (result > max) {
        result = max;
    }

    console.log(result)

    return result;
}

randomNumber(10, 1);

