const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllPoke= require('./pokemonRoute');
const getTypes= require('./typeRoutes');
const newPoke= require('./postRoute');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemon',getAllPoke);
router.use('/types', getTypes);
router.use('/postPoke',newPoke);


module.exports = router;
 