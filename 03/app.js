export default function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    console.log(min)
    console.log(max)

    if (typeof min !== 'number' || isNaN(min) || typeof max !== 'number' || isNaN(max)) {
        console.log('Both parameters must be numbers!')
    }

    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    console.log(result)

    return result;
}

randomNumber(10, 1);

