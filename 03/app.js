export default function randomNumber(min, max) {
    if(!isNumber(min)) {
        throwError('"min" must be a number')
    }

    if(!isNumber(max)) {
        throwError('"max" must be a number')
    }

    if(min > max) {
        throwError('"min" cannot be greater than "max"')
    }

    return Math.random() * (max - min) + min
}

function isNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value)
}

function throwError(message) {
    throw new Error(message)
}