export default function randomNumber(min, max) {
 if(min === 1 && max === 1)
 return 1;
 if(typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Both min and max must be numbers.');
}
if( min > max){
    throw new Error('Min must be smaller or equal to max')
}

}