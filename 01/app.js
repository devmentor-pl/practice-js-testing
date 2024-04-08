// BłĄD - pokazuje się 518.25
function getProductList() {
    return [
        {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
        {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27}
    ];
}

function getTotalPrice(productList) {
    return productList.reduce((acc, product) => acc + (product.price * product.count), 0);
}

const totalPrice = getTotalPrice( getProductList() );
console.log(totalPrice.toFixed(2)); // prawidłowa wartość: 390.42 (należy zaokrąglić do 2 miejsc po przecinku)
// pokazuje się 518.25