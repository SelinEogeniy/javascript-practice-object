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
