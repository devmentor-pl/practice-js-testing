export default function randomNumber(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
        throw new Error('Both arguments should be a number');
    }
}