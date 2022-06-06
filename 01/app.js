function getProductList() {
    return [
        {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
        {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27}
    ]
}

// function getTotalPrice(productList) {
//     return productList.reduce( (product, acc) => {
//         return acc + (product.price * product.count);
//     });
// }

function getTotalPrice(productList) {
    return productList.reduce( (acc, product) => {
        // debugger
        return acc + (product.price * product.count * (1 - product.discount))
    }, 0)
}

const totalPrice = getTotalPrice( getProductList() )
console.log(totalPrice.toFixed(2));  // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)





// get Array
// -----------------
// function getProductList() {
//     return [
//         {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
//         {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27}
//     ]
// }
// const arr = getProductList()
// console.log( arr )
// function getTotalPrice( productList ) {
//     const arr = productList
//     console.log( arr )
// }
// getTotalPrice( getProductList() )


// get reduce
// ----------------
// function getProductList() {
//     return [
//         {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
//         {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27}
//     ]
// }

// function getTotalPrice( productList ) {
//     const valuePrive = productList.reduce( (prev, {price, count, discount}) => prev + (price * count * (1 - discount)), 0 )
//     return valuePrive
// }

// const result = getTotalPrice( getProductList() )
// console.log( result.toFixed(2) )






