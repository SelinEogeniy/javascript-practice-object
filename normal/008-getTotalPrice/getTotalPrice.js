// getTotalPrice

// Порахуй загальну суму покупок користувача.

function getTotalPrice(user) {
  return user.purchases.reduce((acc, item) => acc + item.price, 0);
}

// приклад
const user = {
  name: "Олег",
  purchases: [
    { item: "Хліб", price: 25 },
    { item: "Молоко", price: 32 },
    { item: "Сир", price: 80 },
  ],
};
console.log(getTotalPrice(user)); // 137
