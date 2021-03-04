function getProductList() {
    return [
        { name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21 },
        { name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27 }
    ]
}

/*
function getTotalPrice(productList) {
    return productList.reduce((product, acc) => {
    //źle// return acc + (product.price * product.count);
        //dobrze// return (acc.price * acc.count - (acc.price * acc.count * acc.discount)) + (product.price * product.count - (product.price * product.count * product.discount));
    });
}
*/

function getTotalPrice(productList) {
    return productList.reduce((acc, product) => {
        return ((1 - acc.discount) * acc.price * acc.count) + ((1 - product.discount) * product.price * product.count);
    });
}

const totalPrice = Math.round(getTotalPrice(getProductList()) * 100) / 100;
console.log(totalPrice); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)
