export default function randomNumber(min, max) {
    
    if (!isNumber(min)) {
        throw new Error('Min is not a number');
    }

    if (min === max) {        
        return max;
    }    
    
    function isNumber(value) { 
        return (typeof value === 'number');
    }
}

