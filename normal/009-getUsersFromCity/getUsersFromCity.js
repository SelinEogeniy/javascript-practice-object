// 3. getUsersFromCity

// Повернути масив користувачів, які живуть у вказаному місті.

function getUsersFromCity(users, city) {
  return users.filter((user) => user.city === city);
}

// приклад
const users = [
  { name: "Іра", city: "Київ" },
  { name: "Олег", city: "Львів" },
  { name: "Юля", city: "Київ" },
];

console.log(getUsersFromCity(users, "Київ"));
// [{ name: "Іра", city: "Київ" }, { name: "Юля", city: "Киї
