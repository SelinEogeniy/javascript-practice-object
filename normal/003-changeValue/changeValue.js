// Зміна властивостей у масиві об’єктів

// Є масив products. Збільш усім цінам price на 10%.

const products = [
  { name: "Phone", price: 1000 },
  { name: "Laptop", price: 2000 },
];

for (const product of products) {
  product.price += product.price * 0.1;
}

// після змін:
/// Phone → 1100
/// Laptop → 2200
console.log(products);
