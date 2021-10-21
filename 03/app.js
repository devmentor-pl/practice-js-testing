export default function randomNumber(min, max) {
    if (!isVariableType(min, 'number')) {
        throw new Error('Argument have to be a number');
    }
    if (!isVariableType(max, 'number')) {
        throw new Error('Argument have to be a number');
    }
}

function isVariableType(variable, type) {
    return typeof variable === type;
}