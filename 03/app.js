export default function randomNumber(min, max) {
    if(min === 1 && max === 1) {
        return 1;
    } else return Math.round(Math.random() * (max - min + 1) + min);
}