// Масив об’єктів
// Є масив користувачів. Виведи імена всіх користувачів у консоль.

const users = [
  { name: "Anna", age: 20 },
  { name: "Oleh", age: 25 },
  { name: "Katya", age: 19 },
];

users.map((user) => console.log(user.name));

// очікувано в консолі:
/// Anna
/// Oleh
/// Katya
