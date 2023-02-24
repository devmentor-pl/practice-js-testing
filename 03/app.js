export default function randomNumber(min, max) {
    if ((min == NaN) || (max == NaN)) {
        return NaN;
    } else {
        const number = Math.floor(Math.random() * (max - min + 1) + min);
        return number;
    }
}