// export default 
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    number = Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i < 21; i++) {
    console.log(i, randomNumber(1, 100))
}
