export default function randomNumber(min, max) {
    if(typeof min !== 'number'){
        throw new Error('Property has to be a number')
    }
    const randomNumber = Math.random()* (max - min) + min 
    return randomNumber
}