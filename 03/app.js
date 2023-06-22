export default function randomNumber(min = 0, max = 0) {
    _isTypeNumber(min)
    return Math.floor(Math.random() * (max - min)) + min

}

function _isTypeNumber(value) {
    if (typeof value !== 'number') {
        throw new Error('Property is not a number')
    }
}