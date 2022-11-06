/*
    Ruta: /individus
*/
const { Router } = require('express');
const { getIndividus, getIndividuById, postIndividu, putIndividu, deleteIndividu} = require('../controllers/individus');


const router = Router();

router.get( '/', getIndividus);

router.get( '/:id', getIndividuById);

router.post( '/', postIndividu);

router.put( '/:id', putIndividu);

router.delete( '/:id', deleteIndividu);

module.exports = router;