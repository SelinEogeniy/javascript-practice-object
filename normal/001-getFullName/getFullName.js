// Об’єкт у функції

// Напиши функцію getFullName(person), яка приймає об’єкт з властивостями firstName і lastName і повертає повне ім’я.

function getFullName(obj) {
  return `${obj.firstName} ${obj.lastName}`;
}

console.log(getFullName({ firstName: "Євген", lastName: "Сидоренко" }));
// "Євген Сидоренко"
