// Створи копію об’єкта user, щоб зміни в копії не впливали на оригінал.

const user = { name: "Anna", age: 22 };
// створи копію user і зміни в ній age
console.log(user.age);
const userCopy = structuredClone(user);

userCopy.age = 30;
// 22
console.log(userCopy.age); // 30 (після зміни в копії)
