export default randomNumber
function randomNumber(min, max) {

    function setProp(el) {
        if (el) {
            if (typeof el !== "number") {
                throw new Error('Property have to be a number')
            }
            else {
                return el
            }

        }
        else {
            return 0
        }
    }

    const minVal = setProp(min)
    const maxVal = setProp(max)

    if (maxVal < minVal) {
        throw new Error('Max value have to be larger than min value')
    }
    const result = Math.round(Math.random() * (maxVal - minVal) + minVal)
    return result
}
