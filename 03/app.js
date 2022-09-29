export default function randomNumber(min, max) {


    if (isNumber(min)) {

        errorMessage('"min " is not a number')

    }

    if (typeof max !== 'number') {

        errorMessage('"max " is not a number')

    }

    return Math.random() * (max - min) + min

}

function isNumber(value) {
    return typeof value !== 'number'

}

function errorMessage(message) {

    throw new Error(message)
}