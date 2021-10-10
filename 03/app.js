export default function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if(typeof min !== 'number') {
        throw new Error('not number');
    } else {
   
    return Math.floor(Math.random() * (max - min)) + min;
    }
}


