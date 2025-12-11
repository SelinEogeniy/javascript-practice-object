// 4. getAverageSalary

// Повернути середню зарплату працівників.

function getAverageSalary(employees) {
  return (
    employees.reduce((acc, item) => acc + item.salary, 0) / employees.length
  ).toFixed(2);
}

// приклад
const employees = [
  { name: "Іра", salary: 25000 },
  { name: "Олег", salary: 30000 },
  { name: "Юля", salary: 28000 },
];

console.log(getAverageSalary(employees)); // 27666.66...
