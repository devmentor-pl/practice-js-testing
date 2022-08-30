export default function randomNumber(min, max) {
    if(typeof min === 'undefined' || typeof max === 'undefined') {
        throw new Error('Property have to be a number')
    }

    if(max > min) {
        throw new Error('Min cannot be bigger than max')
    }
    
    return Math.round(Math.random() * (max-min) + min )
}