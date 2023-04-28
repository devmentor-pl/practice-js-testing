function getProductList() {
  return [
    {
      name: "JavaScript: podstawy",
      type: "book",
      count: 3,
      price: 67.19,
      discount: 0.21,
    },
    {
      name: "React: podstawy",
      type: "book",
      count: 4,
      price: 79.17,
      discount: 0.27,
    },
  ];
}

const productList = getProductList();

console.warn(productList);

function getTotalPrice(productList) {
  return productList.reduce((acc, product) => {
    console.warn(acc);
    console.warn(product.price * product.count);
    const promoDiscount = product.price * product.discount;
    const total = acc + (product.price - promoDiscount) * product.count;
    return total;
  }, 0);
}

const totalPrice = getTotalPrice(getProductList());
console.log(totalPrice.toFixed(2)); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)
