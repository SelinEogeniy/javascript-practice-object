// getAdults

// Поверни новий масив користувачів, у яких вік 18 або більше.

function getAdults(users) {
  return users.filter((user) => user.age >= 18);
}

// приклад
const users = [
  { name: "Іра", age: 21 },
  { name: "Олег", age: 16 },
  { name: "Юля", age: 19 },
];
console.log(getAdults(users));
// [{ name: "Іра", age: 21 }, { name: "Юля", age: 19 }]
