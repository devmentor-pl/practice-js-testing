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
    checkProperty(prop, value) {
        if(typeof value !== 'number') {
            throw new Error(`Property ${value} have to be a number`);
        }
        this[prop] = value
    } 

    randomNumber() {
        
        return Math.random() * (this.max - this.min) + this.min;

    } 
} 

