export default function randomNumber(min = 0, max = 0) {
    if (isNumber(min)) {
        const number = Math.floor(Math.random() * (max - min) + min);
        return number;
    } else {
        // Tutaj nie działa throw new Error('...')
        return ('One of parameters is not a number')
    }
}

function isNumber(param) {
    return typeof param === 'number' ? true : false
}