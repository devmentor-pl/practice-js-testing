/*export default function randomNumber(min, max) {
    //if (typeof min !== 'number' && typeof max !== 'number' ) {
    //    return alert('Parametry muszą być liczbami')
    //}
    return Math.random() * (max - min) + min;
} */


 export default class RanNum {
    constructor () {            
    }
    checkProperty(value) {
        if(typeof value !== 'number') {
            throw new Error(`Property ${value} have to be a number`);
        }
    
    } 

    randomNumber(min, max) {
        this.checkProperty(min)
        this.checkProperty(max)
        return Math.random() * (max - min) + min;

    } 
} 

