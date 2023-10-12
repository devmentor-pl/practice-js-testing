export default function randomNumber(min = 0, max = 0) {
    _isTypeNumber(min)
    _isTypeNumber(max)
    _isRangeRight(min, max)

    return Math.floor(Math.random() * (max - min)) + min
}

function _isTypeNumber(value) {
    if (typeof value !== 'number') {
        throw new Error('Property is not a number')
    }
}

function _isRangeRight(min, max) {
    if (max < min) {
        throw new Error("Maximum mustn't be higher then minimum")
    }
}