var knex = require("./knex.js");

function createCar(car){
    return knex("cars").insert(car);
}
function getAllCars(){
    return knex("cars").select("*");
}
function deleteCar(id){
    return knex("cars").where("id",id).del();
}
function updatecar(id,car){
    return knex("cars").where("id",id).update(car);
}

module.exports = {
    createCar,
    getAllCars,
    deleteCar,
    updatecar
};