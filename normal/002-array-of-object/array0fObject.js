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

// . Пошук у масиві об’єктів

// Напиши функцію findUserByName(users, name), яка повертає об’єкт користувача з певним ім’ям.

function findUserByName(users, name) {
  return users.find((user) => user.name === name);
}

console.log(findUserByName(users, "Oleh"));
// {name: "Oleh", age: 25}
