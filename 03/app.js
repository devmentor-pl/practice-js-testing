export default function randomNumber(min, max) {
    if (typeof min !== "number") {
        throw new Error("Min is not a number");
    }
    if (typeof max !== "number") {
        throw new Error("Max is not a number");
    }
    if (max < min) {
        throw new Error("Max cannot be smaller than min");
    } else return Math.floor(Math.random() * (max - min + 1)) + min;
}
