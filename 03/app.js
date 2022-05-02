export default function randomNumber(min, max) {
    if(min === 1 && max === 1) {
        return 1;
    } else if(typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Arguments have to be a number!');
    } else return Math.round(Math.random() * (max - min + 1) + min);
}