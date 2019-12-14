var database = function(){
    //Db stuff like connection 
    var db = [];
    console.log(db,"db");
    // get by id
    var get = function(id){
        console.log("Getting task from DB"+id);
        return db[id];
    }
    // save data
    var save = function(task) {
        console.log("Saving task to DB object");
        task["id"] = randomString();
        db.push(task);
        return task;
    }
    // listing 
    var list = function() {
        console.log("list of the task");
        return db;
    }

    // delete the data 
    var dlt = function(id) {
        console.log("delete the task");
    }

    // generate the random string
    var randomString = function () {
        return Math.floor(Math.random()*1000000)
    }
    return {get, save, delete:dlt, list};

}

var Task = function () {
    this.database = database();
    console.log(this.database,"dbddd");
    
}
Task.prototype.save = function (task) {
    return this.database.save(task);
}
Task.prototype.get = function (id) {
    return this.database.get(id);
}
Task.prototype.delete = function(id){
    return this.database.delete(id);
}
Task.prototype.list = function(){
    return this.database.list();
}


var task1 = new Task();
// saving the task
console.log("-------task1-----");
console.log(task1);

console.log(task1.save({"name":"Task name"}));

console.log(task1.save({"name":"Task name2"}));
console.log(task1.save({"name":"Task name3"}));
console.log(task1.save({"name":"Task name4"}));
console.log("--------------");

console.log(task1.list());
var task2 = new Task();

console.log("-------task2-----");
console.log(task2);

console.log("--------------");
console.log(task2.list());
console.log("------------------");


console.log(module.id);
console.log(module);