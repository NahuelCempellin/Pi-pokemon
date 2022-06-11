const axios= require('axios');
const {Types}= require('../db');
const{Op}= require('sequelize')

const getTypes= async()=>{

try{
const pokeTypes= (await axios.get('https://pokeapi.co/api/v2/type')).data;


const typePoke=  pokeTypes.results;

typePoke.forEach(el=>{
    Types.findOrCreate({
        where:{
            name: el.name
        }
    })
});


const allTypes= await Types.findAll();

return allTypes;
}catch(error){
    console.log(error)
}
}

module.exports={getTypes}