export default function randomNumber(min, max) {

    if(typeof min !== 'number'){
        throw new Error ('Property min have to be a number!');

    } else if (typeof max !== 'number'){
        throw new Error ('Property max have to be a number!');

    } else if (min > max) {
        throw new Error ('Max has to be greater than Min!')
    }
     else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}