const {Country} = require('../db')

const getCountryById = async (id)=>{
    // console.log(id)
    const country = await Country.findByPk(id);
    return country;
}

const getCountryByName = async (name)=>{
    console.log(name)
    const contryBd = await Country.findAll({where: {nombre: name}});

    return contryBd;
}

const getAllCountry = async ()=>{
    const allCountryBDD = await Country.findAll();

    return allCountryBDD;
}

module.exports ={
    getCountryById,
    getAllCountry,
    getCountryByName,
}