export default function randomNumber(min, max) {
    const drawnNumber = Math.floor(Math.random() * max + min);
    return drawnNumber;
}