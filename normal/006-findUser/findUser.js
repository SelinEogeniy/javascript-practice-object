// findUser

// Знайди користувача за його ім’ям.
// Якщо не знайдено — поверни "Користувача не знайдено".

function findUser(users, name) {
  const findUser = users.find((user) => user.name === name);
  if (findUser === undefined) {
    return `Користувача не знайдено`;
  } else {
    return findUser;
  }
}

const users = [
  { name: "Іра", age: 21 },
  { name: "Олег", age: 16 },
];
console.log(findUser(users, "Іра")); // { name: "Іра", age: 21 }
console.log(findUser(users, "Юля")); // "Користувача не знайдено"
