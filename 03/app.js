export default function randomNumber(min = 0, max = 0) {
    const number = Math.floor(Math.random() * (max - min) + min);
    return number;
}