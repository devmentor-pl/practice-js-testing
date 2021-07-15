export default function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    return result;
}

randomNumber(1, 10);

