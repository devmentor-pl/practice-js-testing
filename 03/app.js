export default function randomNumber(min, max) {
    if (typeof min === 'undefined' || typeof max === 'undefined') {
        throw new Error('This function should contains two number value [min],[max]');
    }
}