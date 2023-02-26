export default function randomNumber(min, max) {
    if (((isNaN(min)) || (isNaN(max))) || (max < min)) {
        return false;
    } else {
        const number = Math.floor(Math.random() * (max - min + 1) + min);
        if ((min <= number) && (max >= number)) {
            return number;
        } else return false;

    }
}