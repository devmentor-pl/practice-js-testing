export default function randomNumber(min, max) {

    if( min === max) {
        return min
    }

    if(min > max) {
        throw new Error('value of min cannot be greater than value of max')
    }
}