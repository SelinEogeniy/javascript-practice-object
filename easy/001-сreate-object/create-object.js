// Завдання 1: Створення об'єкта

// Створи об'єкт person з такими властивостями:
// name (рядок)
// age (число)
// job (рядок)

// Потім виведи значення властивості name в консоль.

const person = {
  name: "Eogeniy",
  age: 33,
  job: "developer",
};
console.table(person);
console.log(person.name);

// Завдання 2: Додавання та зміна властивостей

// До об’єкта person додай властивість city і присвой їй значення "Kyiv". Потім зміни значення властивості age на 26.

person.city = "Kyiv";
person.age = 26;

console.table(person);

// Завдання 3: Використання об’єкта в функції

// Напиши функцію greet, яка приймає об’єкт person і повертає рядок:
// "Hello, my name is [name] and I am [age] years old."

function greet(obj) {
  return `Hello, my name is ${obj.name} and I am ${obj.age} years old`;
}
console.log(greet(person));

// Завдання 4: Перебирання об’єкта

// Виведи в консоль всі ключі та значення об’єкта person.

for (const key in person) {
  console.log(`key: ${key}, value: ${person[key]}`);
}
