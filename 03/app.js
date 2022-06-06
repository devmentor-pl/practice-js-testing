// export default function randomNumber(min, max) {
//     const random = Math.floor(Math.random() * (max - min + 1) + min)    
//     return random
// }
// console.log( randomNumber(1,2) )


// function randomNumber(min, max) {
//     try {
//         // if(min === undefined || max === undefined) {
//         if(typeof min !== 'number' || typeof max !== 'number') {
//             throw new Error('min or max undefined')
//         }
//         const random = Math.floor(Math.random() * (max - min + 1) + min)    
//         return random        
//     } catch(error) {
//         console.log(error.message)
//     }
// }
// console.log( randomNumber() )
// export default randomNumber


function randomNumber(min, max) {
        if(typeof min !== 'number' || typeof max !== 'number') {
            throw new Error('min or max undefined')
        }
        const random = Math.floor(Math.random() * (max - min + 1) + min)    
        console.log( random )
        return random        
}
export default randomNumber



