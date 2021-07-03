// export default 
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    if (min > max) {
        max = min;
    }

    result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (min === max && result !== min) {
        throw new RangeError('If \"min\" and \"max\" are equal, \"result\" must be equal \"min\" and \"max\"');
    };
    if (min > max) {
        throw new RangeError('\"min\" cannot be bigger than \"max\"!');
    };

    return result;
}

console.log('Testing randomNumbers');
for (let i = 1; i < 21; i++) {
    console.log(`Result ${i}:  ${randomNumber(4, 3)}`);
}
