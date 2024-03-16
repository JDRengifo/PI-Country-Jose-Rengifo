const {getCountryById} = require('../controllers/countryController')
// Estar ATENTOS a CAMBIAR los datos del QUERY
const countriesHandler = (req, res)=>{
    const { name, email, otraCosa, masCosas } = req.query;
    if(name) res.status(200).send(`Aquí va el Pais ${name}`);
    res.status(200).send("Aquí van todos los Paises");
};

const countriesDetailHandler = async (req, res)=>{
    const {id} = req.params;

try {
    const response = await getCountryById(id);
    res.status(200).json(response);
} catch (error) {
    
}

    // res.status(200).send(`Detalle del Usuario ${id}`); //? esto fue de solo prueba de inicio 42:57
};

module.exports = {
    countriesHandler,
    countriesDetailHandler,
    
}