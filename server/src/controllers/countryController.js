const {Country} = require('../db')

const getCountryById = async (id)=>{
    const country = await Country.findByPk(id);
    return country;
}

module.exports ={
    getCountryById,
}