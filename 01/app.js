function getProductList() {
    return [
        {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
        {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27}
    ]
}

function getTotalPrice(productList) {
    const sum = productList.reduce((acc, product) => {
        return acc + getDetailPrice(product);
    }, 0);
    return sum.toFixed(2)
}

function getDetailPrice({ count, price, discount }) {
    return price * (1 - discount) * count
}

const totalPrice = getTotalPrice( getProductList() );
console.log(totalPrice); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)