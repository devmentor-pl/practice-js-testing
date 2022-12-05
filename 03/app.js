export default function randomNumber(min, max) {
    return Math.random() *(min - max) +min;
}