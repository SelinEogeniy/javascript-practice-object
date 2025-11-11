// getCity

// Напиши функцію, яка повертає місто користувача з об’єкта.

function getCity(user) {
  return user.city;
}

// приклад
const user = { name: "Іра", age: 21, city: "Київ" };
console.log(getCity(user)); // "Київ"
