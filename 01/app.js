function getProductList() {
    return [{
            name: 'JavaScript: podstawy',
            type: 'book',
            count: 3,
            price: 67.19,
            discount: 0.21
        },
        {
            name: 'React: podstawy',
            type: 'book',
            count: 4,
            price: 79.17,
            discount: 0.27
        }
    ]
}

function getTotalPrice(productList) {
    return productList.reduce((acc, product) => {
        let productPrice = (product.price * product.count * (1-product.discount));
        console.log(productPrice);
        acc += productPrice;
        console.log(acc);
        return acc
        // this function is executed once for every element from productList, that is why return doesn't break it
    }, 0);
}

const totalPrice = getTotalPrice(getProductList());
console.log(totalPrice.toFixed(2)); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)