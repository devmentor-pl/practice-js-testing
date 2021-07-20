export default function randomNumber(min, max) {
    
    if(min === 1 && max === 1) {
        return 1;
    }

    if(typeof min === 'undefined' || typeof max === 'undefined') {
        return 0;
    }

    if(min > max || max < min) {
        throw new Error (
            'min have to be lower than max'
        )
    }

    const randomNum = Math.floor(Math.random() * (max - min)) + min
    return randomNum;
}