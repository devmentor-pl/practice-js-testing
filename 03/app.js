/*export default function randomNumber(min, max) {
    //if (typeof min !== 'number' && typeof max !== 'number' ) {
    //    return alert('Parametry muszą być liczbami')
    //}
    return Math.random() * (max - min) + min;
} */

//randomNumber(1,2);

export default class RanNum {
    constructor () {
        this.min = 2,
        this.max = 1
    }
    randomNumber() {
        return Math.random() * (this.max - this.min) + this.min;
    }
}