export default function randomNumber(min, max) {
    if (!isVariableType(min) || !isVariableType(max)) {
        throw new Error('Argument have to be a number');
    }
}

function isVariableType(variable, type = 'number') {
    return typeof variable === type;
}