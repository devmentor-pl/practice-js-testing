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
        return acc + (product.price * product.count * (1 - product.discount));
    }, 0);
}

// W funkcji reduce w JavaScript, drugi argument to wartość początkowa akumulatora.W twoim przypadku, drugi argument to 0, co oznacza, że acc(akumulator) zaczyna się od zera.

// Podanie wartości początkowej akumulatora jest opcjonalne. Jeżeli pominięte, reduce użyje pierwszego elementu tablicy jako początkową wartość akumulatora. W przypadku, gdy tablica jest pusta, a wartość początkowa nie jest podana, wywołanie funkcji reduce zwraca błąd


const totalPrice = getTotalPrice(getProductList());
console.log(totalPrice.toFixed(2));
// prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)z