export default function randomNumber(min, max) {
    if(!isNumber(min)) {
        throwError('"min" is not a number')
    }

    return Math.random() * (max - min) + min
}

function isNumber(value){
    return typeof value === 'number' && !Number.isNaN(value)
}