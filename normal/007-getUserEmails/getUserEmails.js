function getUserEmails(users) {
  let emails = [];
  for (const user of users) {
    emails.push(user.email);
  }
  return emails;
}

// приклад
const users = [
  { name: "Іра", email: "ira@mail.com" },
  { name: "Олег", email: "oleg@mail.com" },
  { name: "Юля", email: "yulia@mail.com" },
];
console.log(getUserEmails(users));
// ["ira@mail.com", "oleg@mail.com", "yulia@mail.com"]
