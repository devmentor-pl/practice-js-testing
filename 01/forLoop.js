function getProductList() {
    return [
        {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
        {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27}
    ]
}

function getTotalPrice(productList) {

    let loopForTotalPrice = 0;
    for (let i = 0; i < productList.length; i++) {
        loopForTotalPrice = loopForTotalPrice + ((productList[i].price * productList[i].count) * (1 - productList[i].discount));
    }

    return loopForTotalPrice;
}

console.log('Solution 2: with For loop')

const totalPrice3 = Math.round(getTotalPrice(getProductList()) * 100) / 100;
console.log(totalPrice3); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)