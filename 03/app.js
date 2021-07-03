// export default 
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (min === max && result !== min) {
        throw new RangeError('If \"min\" and \"max\" are equal, \"result\" must be equal \"min\" and \"max\"');
    };
    
    return result;
}

console.log('Testing randomNumbers');
for (let i = 1; i < 21; i++) {
    console.log(`Result ${i}:  ${randomNumber(4, 3)}`);
}
