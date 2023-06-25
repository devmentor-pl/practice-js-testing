function getProductList() {
    return [
        {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
        {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27}
    ]
}

function getTotalPrice(productList) {
    let price = 0;
    productList.forEach(element => {
        price = price + (element.count * (element.price * (1 - element.discount)))
    });
    return price.toFixed(2)
}

const totalPrice = getTotalPrice( getProductList() );
console.log(totalPrice); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)