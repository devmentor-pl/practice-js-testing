//Twoim zadaniem będzie przy pomocy narzędzia Debugger znaleźć rozwiązanie problemu związanego z prawidłowym liczeniem ceny za zakupy.
//Obecnie w konsoli pojawia się jakiś dziwny napis w stylu: [object Object]201.57.
//Twoim zadaniem jest naprawienie błędu w taki sposób, aby cena wyświetlana w konsoli była prawidłowa tj. 390.42.



function getProductList() {
    return [
        { name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21 },
        { name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27 }
    ]
}

function getTotalPrice(productList) {
    return productList.reduce((acc, product) => {
        return acc + ((product.price - product.price * product.discount) * product.count);
    }, 0).toFixed(2);
}

const totalPrice = getTotalPrice(getProductList());
console.log(totalPrice); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)