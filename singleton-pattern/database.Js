var database = function(){
    //Db stuff like connection 
    var db = [];
    var count = 0;
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
        console.log("list of the task",count++);
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

module.exports = new database;