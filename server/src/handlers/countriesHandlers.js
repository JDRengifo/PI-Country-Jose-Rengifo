const {getCountryById, getAllCountry, getCountryByName} = require('../controllers/countryController')


const countriesHandler = async (req, res)=>{
    const { name } = req.query;
       console.log(name)
    try {
        if(name) {
            const countyByName = await getCountryByName(name)
            res.status(200).json(countyByName);
        } else {
            const response = await getAllCountry()
            res.status(200).json(response)
        };
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
};

const countriesDetailHandler = async (req, res)=>{
    const {id} = req.params;
    // res.status(200).send(`Detalle del Usuario ${id}`); //? esto fue de solo prueba de inicio 42:57
    // console.log(id)
try {
    const response = await getCountryById(id);
    res.status(200).json(response);
    // console.log(response)
} catch (error) {
    res.status(400).send(error = error.message)
}



};

module.exports = {
    countriesHandler,
    countriesDetailHandler,
    
}