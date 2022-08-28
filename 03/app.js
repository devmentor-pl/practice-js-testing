export default function randomNumber(min, max) {
    if(typeof min === 'undefined' || typeof max === 'undefined') {
        throw new Error('Property have to be a number')
    }

    if(max > min) {
        throw new Error('Max cannot be bigger than min')
    }
    
    return Math.round(Math.random() * (max-min) + min )
}