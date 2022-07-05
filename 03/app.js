export default function randomNumber(min, max) {
    
    if (!isNumber(min) || !isNumber(max)) {
        throw new Error('Min or max is not a number');
    }

    if (min === max) {        
        return max;
    }    

    if (max < min) {
        throw new RangeError('Max must be greater than min');
    }
    
    function isNumber(value) { 
        return (typeof value === 'number');
    }
}

