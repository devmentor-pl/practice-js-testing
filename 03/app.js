export default function randomNumber(min, max) {
    
    if(min === 1 && max === 1) {
        return 1;
    }

    const randomNum = Math.floor(Math.random() * (max - min)) + min
    return randomNum;
}