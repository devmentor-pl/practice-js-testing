export default function randomNumber(min, max) {
    if (typeof min === 'undefined' || typeof max === 'undefined') {
        throw new Error('This function should contains two number value [min],[max]');
    };
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('This function should contains only numbers');
    };
    if (min > max) {
        throw new Error(`First argument can not be greater then second one`);
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
};