// getTopStudent

// Знайди студента з найвищим середнім балом.
// function getTopStudent(students) {
//   let topStudent = students[0];
//   let topAverage =
//     topStudent.grades.reduce((acc, num) => acc + num, 0) /
//     topStudent.grades.length;

//   for (const student of students) {
//     const average =
//       student.grades.reduce((acc, num) => acc + num, 0) / student.grades.length;

//     if (average > topAverage) {
//       topAverage = average;
//       topStudent = student;
//     }
//   }

//   return topStudent;
// }

function getTopStudent(students) {
  return students.reduce((best, current) => {
    const bestAvg =
      best.grades.reduce((acc, n) => acc + n, 0) / best.grades.length;
    const currentAvg =
      current.grades.reduce((acc, n) => acc + n, 0) / current.grades.length;

    return currentAvg > bestAvg ? current : best;
  });
}

// приклад
const students = [
  { name: "Іра", grades: [12, 10, 11] },
  { name: "Олег", grades: [8, 9, 7] },
  { name: "Юля", grades: [11, 12, 12] },
];
console.log(getTopStudent(students));
// { name: "Юля", grades: [11, 12, 12] }
