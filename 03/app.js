export default function randomNumber(min, max) {

    if(typeof min !== 'number' || typeof max !== 'number'){
        throw new Error('Property has to be a number');
        
    }else if(max < min){
        throw new Error('Max range cannot be smaller than min range');
    }

    return Math.floor(Math.random() * (max - min + 1) + min)
} 


