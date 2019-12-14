var Task = require("./Task");

var task1 = new Task();
// saving the task


console.log(task1.save({"name":"Task name"}));

console.log(task1.save({"name":"Task name2"}));
console.log(task1.save({"name":"Task name3"}));
console.log(task1.save({"name":"Task name4"}));

console.log(task1.list());
var task2 = new Task();

console.log(task2.list());
console.log(task1.list());

// console.log(module);