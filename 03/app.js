export default function randomNumber(min, max) {
    if(typeof(min) != 'number' || typeof(max) != 'number') return null;
    if(min > max) {
        throw new Error('min parameter cannot be bigger than max');
    } 
}