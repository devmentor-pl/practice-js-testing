export default function randomNumber(min, max) {
    if(min === max) {
        return min;
    }

    if(typeof min !== 'number'){
        throw new Error ('value: min is not a number')
    }

    if(typeof max !== 'number') {
        throw new Error ('value: max is not a number')
    }

    if(min > max) {
        throw new Error('value min can be greater than value max')
    }
    
    else{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}







// co robi f-cja?
// - losuje jedną liczbę z podanego zakresu

// jakie argumenty przyjmuje f-cja i ile?
// - przyjmuje 2 argumenty: liczbe minimalną i liczbe maksymalną

