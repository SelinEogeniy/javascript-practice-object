// Підрахунок кількості властивостей

// Напиши функцію countProperties(obj), яка повертає кількість властивостей в об’єкті.

function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log(countProperties({ a: 1, b: 2, c: 3 })); // 3
console.log(countProperties({ name: "JS" })); // 1
