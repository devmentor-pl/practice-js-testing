export default function randomNumber(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)    
    return random
}
console.log( randomNumber(1,2) )






