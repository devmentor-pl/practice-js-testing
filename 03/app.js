export default function randomNumber(min, max) {
    if(min === max) {
        return min;
    }

    if((typeof min !== 'number') || (typeof max !=='number')){
        throw new Error ('value: min AND max have to be a number')
    }

    if(min > max) {
        throw new Error('value min can not be greater than value max')
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



