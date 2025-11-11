// groupByCategory

// Згрупуй товари за категорією у форматі:

// {
//   food: [...],
//   tech: [...],
// }

function groupByCategory(products) {
  return products.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});
}

// приклад
const products = [
  { name: "Хліб", category: "food" },
  { name: "Телефон", category: "tech" },
  { name: "Молоко", category: "food" },
];
console.log(groupByCategory(products));
/*
{
  food: [
    { name: "Хліб", category: "food" },
    { name: "Молоко", category: "food" }
  ],
  tech: [
    { name: "Телефон", category: "tech" }
  ]
}
*/
