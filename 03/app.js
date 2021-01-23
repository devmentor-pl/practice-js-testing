/*export default function randomNumber(min, max) {
    //if (typeof min !== 'number' && typeof max !== 'number' ) {
    //    return alert('Parametry muszą być liczbami')
    //}
    return Math.random() * (max - min) + min;
} */


 export default class RanNum {
    constructor (min, max) {
        this.checkProperty('min', min)
        this.checkProperty('max', max)            
    }
    valueInequality (min, max) {
        if (max < min) {
            throw new Error('max have to be greater than min')
        }
    }
    checkProperty(prop, value) {
        if(typeof value !== 'number') {
            throw new Error(`Property ${value} have to be a number`);
        }
        this[prop] = value
    } 

    randomNumber() {
        this.valueInequality(this.min, this.max)
        return Math.random() * (this.max - this.min) + this.min;

    } 
} 

