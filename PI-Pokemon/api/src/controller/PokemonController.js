const axios= require('axios');
const {Pokemon,Types}= require('../db');
const {Op}= require('sequelize');


const getInfo= async()=>{

try{
 const pokemon= (await axios.get('https://pokeapi.co/api/v2/pokemon')).data;
 const pokemon1= (await axios.get(pokemon.next)).data;
 const allPoke= [...pokemon.results, ...pokemon1.results];
const pokeUrl= allPoke.map((urL)=> {
   return{ 
      url:urL.url
    }
})

const mapInfo= pokeUrl.map(async(el)=>{
const info= (await axios.get(el.url)).data;
return info
})

const infoTotal= await  Promise.all(mapInfo)

const pokemonInfo= infoTotal.map((el)=>{
    return{
        name: el.name,
        image: el.sprites.other.dream_world.front_default,
        id: el.id,
        hp: el.stats[0].base_stat,
        str:el.stats[1].base_stat,
        def: el.stats[2].base_stat,
        vel: el.stats[5].base_stat,
        height: el.height,
        weight: el.weight,
        types: el.types.map(el=> el.type.name)
    }
})

let pokeDb= await Pokemon.findAll({
    include:{
        model: Types,
        attributes:['name','id'],
        through:{attributes:[]},
    }
})
console.log(pokeDb)

let infoConcat= pokeDb
?[...pokemonInfo, ...pokeDb]
:[...pokemonInfo]; 



const infoMap= infoConcat.map(el=>{
   
    return{
        name: el.name,
        image: el.image,
        id: el.id,
        hp: el.hp,
        str:el.str,
        def: el.def,
        vel: el.vel,
        height: el.height,
        weight: el.weight,
        types: el.type ? el.type : el.types.map(e=> e.name)?el.types.map(e=> e.name) : el.types ,
        create: el.createdInDb
    }
})




return infoMap
}catch(error){
    console.log(error)
}
}

const getInfoByID= async (id)=>{
    
if(
    id.match( /^[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}$/i)
){
    try{
        let dbSearch= await Pokemon.findAll({
            where:{id},
            include:[
                {model: Types, attributes:['name','id'], through:{attributes:[]}}
            ],
        })
        return dbSearch[0]
    }catch(error){
    console.log(error)
}
}else{
    try{
        let info=(await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
        
        const obj={
            
                name: info.name,
                image: info.sprites.other.dream_world.front_default,
                id: info.id,
                hp: info.stats[0].base_stat,
                str:info.stats[1].base_stat,
                def: info.stats[2].base_stat,
                vel: info.stats[5].base_stat,
                height: info.height,
                weight: info.weight,
                types: info.types.map(el=> el.type).map(e => e.name)
            
        }
    return obj
    }catch(error){
    console.log(error)
}

}
};




 

module.exports= { 
    getInfo, 
    getInfoByID,

}