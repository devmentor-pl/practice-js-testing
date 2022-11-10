export default function randomNumber(min, max) {

    if(typeof min !== 'number' || typeof max !== 'number'){
        
        throw new Error('Incorrect type of property.');
    }else if(max < min){
        
        throw new Error('Incorrect range of numbers.');
    }else if(!Number.isInteger(min) || !Number.isInteger(max)){
       
        throw new Error('Incorrect number provided.');
    }

    return Math.floor(Math.random() * (max - min + 1) + min)
} 


