// Є масив об’єктів library, де кожен об’єкт — це книга з полями title, author, year.
// Створи функцію getBooksAfterYear(library, year), яка повертає всі книги, видані після заданого року.

const library = [
  { title: "JS Basics", author: "John", year: 2015 },
  { title: "React Deep Dive", author: "Dan", year: 2021 },
  { title: "Node for Beginners", author: "Mike", year: 2019 },
];

function getBooksAfterYear(library, year) {
  return library.filter((book) => book.year > year);
}

console.log(getBooksAfterYear(library, 2018));
// [{title: "React Deep Dive", ...}, {title: "Node for Beginners", ...}]
