export default function randomNumber(min, max) {
    if (!isVariableType(min, 'number') || !isVariableType(max, 'number')) {
        throw new Error('Argument have to be a number');
    }
}

function isVariableType(variable, type) {
    return typeof variable === type;
}