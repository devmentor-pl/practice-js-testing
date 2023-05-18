export default function randomNumber(min=0,max=0) {
    if(typeof min!=='number' || typeof max!=='number') {
        throw new Error('Property have to be a number');
    } 
    const result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}

