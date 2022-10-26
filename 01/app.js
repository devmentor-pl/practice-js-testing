function getProductList() {
    return [
        { name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21 },
        { name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27 }
    ]
}

function getTotalPrice(productList) {
    let acc = 0
    productList.forEach(element => {
        const count = Number(element.count)
        const price = Number(element.price)
        const discount = Number(element.discount)
        acc = acc + count * price * (1 - discount)
        return acc = Math.round(acc * 100) / 100
    })
    return acc
    // return productList.reduce((product, acc) => {
    //     return acc + (product.price * product.count);
    // });
}

const totalPrice = getTotalPrice(getProductList());
console.log(totalPrice); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)