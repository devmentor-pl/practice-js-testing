export default function randomNumber(min, max) {
    if (typeof min !== 'number' && typeof max !== 'number' ) {
        return alert('Parametry muszą być liczbami')
    }
    return Math.random() * (max - min) + min;
}

randomNumber(1,2);