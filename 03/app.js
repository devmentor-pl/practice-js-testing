export default function randomNumber(min, max) {

    validateData(min, max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validateData(min, max) {
    if( min === max) {
        return 1
    }
    
    if(min > max) {
        throw new Error('value of min cannot be greater than value of max')
    }
    
    if(Number.isNaN(min) && Number.isNaN(max)) {
        throw new Error('given value is not a number')
    }
}


