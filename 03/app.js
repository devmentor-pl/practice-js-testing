export default function randomNumber(min, max) {
    if((typeof min !== 'number') || (typeof max !== 'number')) {
        throw new Error('Numbers must be passed as a argument');
    }
    return Math.round(Math.random() * (max - min)) + min;
} 




