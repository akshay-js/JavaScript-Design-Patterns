var database = require("./database");
var Task = function () {
    
}
Task.prototype.save = function (task) {
    return database.save(task);
}
Task.prototype.get = function (id) {
    return database.get(id);
}
Task.prototype.delete = function(id){
    return database.delete(id);
}
Task.prototype.list = function(){
    return database.list();
}

module.exports = Task;