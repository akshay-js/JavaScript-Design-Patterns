var database = require("./database");
var Task = function () {
    this.database = database;
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

module.exports = Task;