/*
    Ruta: /entreprises
*/
const { Router } = require('express');
const { getEntreprises, getEntrepriseById, postEntreprise, putEntreprise, deleteEntreprise} = require('../controllers/entreprises');


const router = Router();

router.get( '/', getEntreprises);

router.get( '/:id', getEntrepriseById);

router.post( '/', postEntreprise);

router.put( '/:id', putEntreprise);

router.delete( '/:id', deleteEntreprise);

module.exports = router;