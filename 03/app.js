export default function randomNumber(min, max) {
    const randomNumber = Math.random()* (max - min) + min 
    return randomNumber
}