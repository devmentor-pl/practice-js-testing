// export default 
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (min === 1 && max === 1 && result !== 1) {
        throw new RangeError('If min and max are 1, result must be 1')
    };

    return result;
}

for (let i = 1; i < 21; i++) {
    console.log(`Result ${i}:  ${randomNumber(1, 1)}`);
}
