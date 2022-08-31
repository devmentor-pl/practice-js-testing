export default function randomNumber(min, max) {
    if(typeof min === 'undefined') {
        throw new Error('Min have to be a number')
    }

    if(typeof max === 'undefined') {
        throw new Error('Max have to be a number')
    }

    if(max > min) {
        throw new Error('Min cannot be bigger than max')
    }
    
    return Math.round(Math.random() * (max-min) + min )
}