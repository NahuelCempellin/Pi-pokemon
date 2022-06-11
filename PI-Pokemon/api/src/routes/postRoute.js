const {Pokemon, Types}=require('../db')
const express= require('express');
const router= express.Router();

router.post('/',async (req,res)=>{
    const {name,hp,image,str,def,vel,height,weight,types}=req.body;
    try{
        let pokemonExist= await Pokemon.findOne({
            where:{
                name: name.toLowerCase(),
            }
        });

    if(pokemonExist) return res.json({msg: 'The pokemon alredy exist'})

    let newPokemon= await Pokemon.create({
        name: name ,
        hp: hp ,
        image: image ,
        str: str,
        def: def ,
        vel: vel,
        height: height,
        weight: weight
        
    });

    let pokemonType= await Types.findAll({
        where:{
            name: types
        }
    });
    
    await newPokemon.addTypes(pokemonType);
    res.status(200).json(pokemonType);
    
     
    }catch(error){
        res.status(404).send(error)
    }
    });

module.exports= router;