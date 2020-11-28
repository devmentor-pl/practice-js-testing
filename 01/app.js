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
        },
        {
            name: 'Czysty kod',
            type: 'book',
            count: 2,
            price: 50,
            discount: 0
        }
    ]
}

function getTotalPrice(productList) {
    //Dzięki debuggerowi i dodaniu do watch zmiennej acc mogłem zauważyć, że wskazuje ona na cały obiekt, a nie jego poszczególne właściwości.
    if (productList.length === 0) {
        return 0;
    } else {
        const value = productList.reduce((total, product) => {
            return (total + (product.price * product.count) * (1 - product.discount))
        }, 0)

        return value.toFixed(2);
    }
}

const totalPrice = getTotalPrice(getProductList());
console.log(totalPrice); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)