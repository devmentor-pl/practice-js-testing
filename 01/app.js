function getProductList() {
    return [
        { name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21 },
        { name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27 }
    ]
}

function getTotalPrice(productList) {
    let acc = 0
    productList.forEach(element => {
        console.groupCollapsed(element.name)
        console.time('Time to calculate element')
        const count = Number(element.count)
        const price = Number(element.price)
        const discount = Number(element.discount)
        const sum = Math.round((count * price * (1 - discount)) * 100) / 100
        console.log('wartość pozycji: ' + sum + 'zł')
        acc = acc + sum
        console.log('wartość koszyka: ' + acc + 'zł')
        console.timeEnd('Time to calculate element')
        console.groupEnd()
        return acc
    })
    return acc
    
    // return productList.reduce((product, acc) => {
    //     return acc + (product.price * product.count);
    // });
}

const totalPrice = getTotalPrice(getProductList());
console.log(totalPrice); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)