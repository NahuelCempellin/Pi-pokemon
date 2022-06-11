const express= require('express');
const router= express.Router();
const {getTypes}= require('../controller/typesController.js');


router.get('/', async(req,res,next)=>{
    try{
        const types= await getTypes();


        res.status(200).send(types);
    }catch(error){
        next(error)
    }
})


module.exports= router;