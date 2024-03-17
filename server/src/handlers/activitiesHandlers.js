const { createActivityBd } = require("../controllers/activitirdController");

const getactivitiesHandler = (req, res)=>{
    res.status(200).send("Aquí van todas las actividades");
};

// Creando Actividades
const activitiesPostHandler = async (req, res)=>{
    const { nombre, duracion, dificultad, temporada } = req.body;

    try {
        const response = await createActivityBd(nombre, duracion, dificultad, temporada);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    res.status(200).send(`creando actividades`);
};

module.exports = {
    getactivitiesHandler,
    activitiesPostHandler
}