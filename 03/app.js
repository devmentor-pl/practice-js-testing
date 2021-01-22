export default function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

randomNumber(1,2);