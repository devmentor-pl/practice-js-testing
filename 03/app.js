export default function randomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}