function getProductList() {
    return [
        {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
        {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27}
    ]
}

function getTotalPrice(productList) {
    return productList.reduce( (product, acc) => {        
        return ( (acc.price * acc.count * (1 - acc.discount)) + (product.price * product.count * (1 - product.discount)))
        //return ((acc.price * acc.count) - ((acc.price * acc.count) * acc.discount)) + ((product.price * product.count) - ((product.price * product.count) * product.discount));
    });
}

const totalPrice = getTotalPrice( getProductList() );
const totalPriceFixed = totalPrice.toFixed(2);
console.log(totalPriceFixed); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)

