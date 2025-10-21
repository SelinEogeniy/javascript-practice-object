// Глибоке копіювання

// Створи об’єкт person з вкладеним об’єктом address.
// Зроби копію так, щоб зміна адреси в копії не змінювала адресу в оригіналі.

const person = {
  name: "Eugene",
  address: {
    city: "Kyiv",
    street: "Main St",
  },
};

const copy = structuredClone(person);
copy.address.city = "Lviv";

console.log(person.address.city); // "Kyiv"
