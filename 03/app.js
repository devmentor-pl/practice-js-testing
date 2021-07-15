export default function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    // both parameters must be numbers
    if (typeof min !== 'number' || isNaN(min) || typeof max !== 'number' || isNaN(max)) {
       console.log('Both parameters must be numbers!');
    }
    
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    return result;
}

randomNumber(1, 10);

