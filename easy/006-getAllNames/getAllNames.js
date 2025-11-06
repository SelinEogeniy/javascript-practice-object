// getAllNames

// Отримай з масиву об’єктів усі імена користувачів у новий масив.

function getAllNames(users) {
  return users.map((user) => user.name);
}

// приклад
const users = [
  { name: "Іра", age: 21 },
  { name: "Олег", age: 25 },
  { name: "Юля", age: 19 },
];
console.log(getAllNames(users)); // ["Іра", "Олег", "Юля"]
