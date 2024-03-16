const {Activity} = require("../db");

const createActivityBd = async (nombre, duración, dificultad, temporada) => {

    const newActivity = await Activity.create({nombre, duración, dificultad, temporada});
    return newActivity
    
    // return await Activity.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {createActivityBd};