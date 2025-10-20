// 1. Перевірка властивості

// Створи функцію hasProperty(obj, key), яка повертає true, якщо в об’єкті є властивість key, інакше false.

function hasProperty(obj, key) {
  return key in obj;
}

console.log(hasProperty({ name: "Євген", age: 25 }, "age")); // true
console.log(hasProperty({ name: "Євген", age: 25 }, "city")); // false
