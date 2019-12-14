var Task = function (task) {
    this.name = task.name;
    this.type = task.type;
}

Task.prototype.start = function () {
    console.log(this.name+" has been started");
}
Task.prototype.inprocess = function () {
    console.log(this.name+" is in process");
    
}
Task.prototype.stop = function(){
    console.log(this.name+" has been stoped");
}

const t = {
    name:"first task",
    type:"nothing"
}
var task1 = new Task(t);
task1.start();
task1.inprocess();
task1.stop();

function Decorator() {
    
}
Decorator.prototype.ajax = function () {
    console.log("Decorator ajax");
}

const dec = new Object();