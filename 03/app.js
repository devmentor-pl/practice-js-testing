export default function randomNumber(min, max) {
    const drawnNumber = Math.floor(Math.random() * max + min);
    if(typeof (min && max) !== 'number'){
        throw new Error('Min and max have to be a number');      
    }
    else if(min > max) {
        throw new Error('Max has to be larger than min');
    }
    return drawnNumber;
}