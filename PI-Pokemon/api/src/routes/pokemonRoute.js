const e = require('express');
const express= require('express');
const router= express.Router();
const {getInfo,getInfoByID}= require('../controller/PokemonController.js');


router.get('/', async(req,res,next)=>{
    const{name}= req.query;

    if(!name){
        try{
    
            const getPoke= await getInfo();
            res.status(200).json(getPoke);
    
        }catch(error){
            next(error)
        }
    }else{
        try{

            let names= await getInfo()
            let pokeNames= await names.filter(el=> el.name.toLowerCase()== name.toLowerCase());
            if(pokeNames.length=== 0){
                res.status(404).send('no se encontro Pokemon')
            }else{
                res.status(200).send(pokeNames)
            }

            res.status(200).send(getPoke) 
        }catch(error){
            console.log(error)
        }
    }
});

router.get('/:id',async(req,res,next)=>{
try{
const {id}= req.params;
const pokeId= await getInfoByID(id);

res.status(200).send(pokeId)
}catch(error){
next(error)
}
});



module.exports= router;