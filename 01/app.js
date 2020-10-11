function getProductList() {
   
    return [
        {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
        {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27}
    ]
    
}

function getTotalPrice(productList) {
    //debugger;
    return productList.reduce( (product, acc) => {
        //console.log(product.price, product.count, acc.count, product.discount, acc.price)
        return (product.count * product.price -(product.count * product.price* product.discount)) +(acc.count * acc.price -(acc.count * acc.price* acc.discount)) 
    });
}

const totalPrice = parseFloat((getTotalPrice( getProductList() ).toFixed(2)));
console.log(totalPrice); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)