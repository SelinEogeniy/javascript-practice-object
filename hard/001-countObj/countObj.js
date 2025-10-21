// Об’єкт із методами

// Створи об’єкт counter з властивістю count і методами:

// increment() — додає 1

// decrement() — віднімає 1

// reset() — скидає до 0

const counter = {
  count: 0,
  increment() {
    this.count += 1;
  },
  decrement() {
    this.count -= 1;
  },
  reset() {
    this.count = 0;
  },
};

counter.increment();
console.log(counter.count); // 1
counter.reset();
console.log(counter.count); // 0
counter.decrement();
console.log(counter.count); // -1
