export default function randomNumber(min, max) {

    if (!min || !max) {
        throw new Error('number is not defined!')
    }
   
    return randomNumber = Math.floor(Math.random() * (max - min) + min)

}



