export default function randomNumber(min, max) {
    if(typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Arg need to be a number!');
    }
    return Math.round(Math.random() * (max - min)) + min;
}