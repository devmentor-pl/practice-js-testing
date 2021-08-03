export default function randomNumber(min, max) {
    
    if(min === max) {
        return min;
    }

    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error(
            'Property have to be a number'
        );
    }
    
    if(max < min) {
        throw new Error (
            'min have to be lower than max'
        )
    }

    const randomNum = Math.floor(Math.random() * (max - min)) + min
    return randomNum;
}