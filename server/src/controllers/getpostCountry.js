const { Country } = require('../db');
const axios = require('axios');

const getPostCountry = async (req, res)=>{
    try {
        const allCountries = await axios.get('http://localhost:5000/countries')
        const dataAll = allCountries.data;

        const countries = dataAll.map(item => {
            return {
                id: item.cca3,
                nombre: item.name.common,
                bandera: item.flags != null ? item.flags.png : 'no se encontro imagen',
                continente: item.continents[0],
                capital: item.capital != null ? item.capital[0] : 'No se encontro dato',
                subregion: item.subregion != null ? item.subregion : 'Sin dato',
                area: item.area,
                poblacion: item.population,
            }
        });

        countries.forEach(async (elemento) => {
            // console.log(elemento.subregion)
            await Country.findOrCreate({
                where: {
                    id: elemento.id,
                    nombre: elemento.nombre,
                    bandera: elemento.bandera,
                    continente: elemento.continente,
                    capital: elemento.capital,
                    subregion: elemento.subregion,
                    area: elemento.area,
                    poblacion: elemento.poblacion,
                }
            });
        });
        
     res.status(200).send('Se guardaron los datos');
    } catch (error) {
        res.status(400).send(error= error.message)
    }
}

module.exports ={
    getPostCountry,
}