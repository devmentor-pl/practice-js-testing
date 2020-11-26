export default function randomNumber(min = 0, max = 0) {
    if (isNumber(min, max)) {
        const number = Math.floor(Math.random() * (max - min) + min);
        return number;
    } else {
        // Tutaj nie działa throw new Error('...')
        throw new Error('One of parameters is not a number');
    }
}

function isNumber(...param) {
    const paramArr = [...param];
    if (paramArr.some(item => typeof item !== 'number')) {
        return false;
    }
    return true;
}