export default function randomNumber(min, max) {
    validateRange(min,max);
    
}


function validateRange(min, max) {
    if (typeof min !== 'number') {
        throw new Error('min must be a number')
    }
    if (typeof max !== 'number') {
        throw new Error('max must be a number')
    }
    if (min >= max) {
        throw new Error('Max value must be grater than min')
    }
}