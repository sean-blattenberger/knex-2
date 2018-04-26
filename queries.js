const database = require("./database-connection");

module.exports = {
    list(){
        return database("coffee");
    },
    read(id){
        return database("coffee").where("id", id);
    },
    create(coffee){
        return database("coffee").insert(coffee);
    },
    update(id, coffee){
        return database("coffee").where("id", id).update(coffee)
    },
    delete(id){
        return database("coffee").where("id", id).del()
    }
};
