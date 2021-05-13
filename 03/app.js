export default function randomNumber(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
        throw new Error('Both arguments should be a number');
    }

    if (min > max) {
        throw new Error('The first argument should be smaller than second one');
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}