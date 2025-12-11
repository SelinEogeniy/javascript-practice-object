// 2. hasProperty

// Перевірити, чи є в об’єкта певна властивість.

function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}

// приклад
const car = { brand: "BMW", year: 2020 };
console.log(hasProperty(car, "brand")); // true
console.log(hasProperty(car, "model")); // false
