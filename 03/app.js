export default function randomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min) + min)
    return number

}