export default function randomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    if (typeof min === 'undefined' || typeof max === 'undefined') {
        throw new Error('This function should contains two number value [min],[max]');
    };
    if (typeof min !== 'number') {
        throw new Error('[min]-value should contains only numbers');
    };
    if (typeof max !== 'number') {
        throw new Error('[max]-value should contains only numbers');
    }
    if (min > max) {
        throw new Error(`First argument can not be greater then second one`);
    }
    if (min === max) {
        return max;
    }
    if (randomNumber >= min || randomNumber <= max) {
        return true;
    }
};