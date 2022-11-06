/*
    Ruta: /controles
*/
const { Router } = require('express');
const { getControles, getControleById, postControle, putControle, deleteControle} = require('../controllers/controles');


const router = Router();

router.get( '/', getControles);

router.get( '/:id', getControleById);

router.post( '/', postControle);

router.put( '/:id', putControle);

router.delete( '/:id', deleteControle);

module.exports = router;