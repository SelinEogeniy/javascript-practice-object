// 1. getFullName

// Функція приймає об’єкт користувача і повертає повне ім’я.

function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

// приклад
const user = { firstName: "Іра", lastName: "Коваленко" };
console.log(getFullName(user)); // "Іра Коваленко"
