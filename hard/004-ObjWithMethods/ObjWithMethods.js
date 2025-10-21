// Об’єкт із масивом і методами

// Створи об’єкт todoList з масивом tasks і методами:

// addTask(task)

// removeTask(task)

// getAllTasks()

const todoList = {
  tasks: [],
  addTask(task) {
    this.tasks.push(task);
  },
  removeTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  },
  getAllTasks() {
    return this.tasks;
  },
};

todoList.addTask("Learn JS");
todoList.addTask("Sleep");
todoList.removeTask("Learn JS");
console.log(todoList.getAllTasks());
// ["Learn JS"]
