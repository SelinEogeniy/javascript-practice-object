// Масив об’єктів + пошук за умовою

// Є масив students, де кожен студент має name і grades (масив чисел).
// Напиши функцію getAverageGrade(students, name) — повертає середню оцінку студента.

const students = [
  { name: "Anna", grades: [80, 90, 85, 95] },
  { name: "Oleh", grades: [70, 75, 80, 65] },
];

function getAverageGrade(students, name) {
  const correntStudent = students.find((student) => student.name === name);
  return (
    correntStudent.grades.reduce((acc, num) => acc + num, 0) /
    correntStudent.grades.length
  );
}

console.log(getAverageGrade(students, "Anna")); // 87.5
