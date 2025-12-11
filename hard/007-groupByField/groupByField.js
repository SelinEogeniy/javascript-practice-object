// 5. groupByField

// Універсальна функція: групує масив об’єктів за будь-яким полем.

function groupByField(items, field) {
  return items.reduce((acc, item) => {
    const key = item[field];
    if (!acc[key]) {
      acc[key] = [];
      acc[key].push(item);
    } else {
      acc[key].push(item);
    }
    return acc;
  }, {});
}

// приклад
const people = [
  { name: "Іра", age: 21 },
  { name: "Олег", age: 25 },
  { name: "Юля", age: 21 },
];

console.log(groupByField(people, "age"));
/*
{
  21: [
    { name: "Іра", age: 21 },
    { name: "Юля", age: 21 }
  ],
  25: [
    { name: "Олег", age: 25 }
  ]
}
*/
