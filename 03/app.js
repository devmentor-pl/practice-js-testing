export default function randomNumber(min, max) {
    if((typeof min !== 'number') || (typeof max !== 'number')) {
        throw new Error('Numbers must be passed as a argument');
    } 
    if (max < min) {
        throw new Error ('Min number must be lower than max');
    }

    const randomNumber = Math.round(Math.random() * (max - min)) + min;

    if ((randomNumber < min) || (randomNumber > max)) {
        throw new Error ('returned number must be within the given range')
    } else {
        return randomNumber;
    }
} 




