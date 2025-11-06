// groupByAge

// Згрупуй користувачів за віком у форматі:

// {
//   18: [{ name: "Іра", age: 18 }, ...],
//   20: [{ name: "Олег", age: 20 }, ...],
// }

function groupByAge(users) {
  return users.reduce((acc, user) => {
    const age = user.age;
    if (!acc[age]) {
      acc[age] = [];
    }
    acc[age].push(user);
    return acc;
  }, {});
}

// приклад
const users = [
  { name: "Іра", age: 18 },
  { name: "Олег", age: 20 },
  { name: "Юля", age: 18 },
];
console.log(groupByAge(users));
/*
{
  18: [{ name: "Іра", age: 18 }, { name: "Юля", age: 18 }],
  20: [{ name: "Олег", age: 20 }]
}
*/
