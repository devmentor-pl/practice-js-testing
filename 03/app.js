export default function randomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('arguments are not a numbers')
    }
    if (min > max) {
        throw new Error('Min cannot be greater than max');
    }
    if (min === max) {
        return min;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min; //nie wiem, czy  o to chodziło, czy zawsze musimy refraktoryzować element z ostatniego testu.
}