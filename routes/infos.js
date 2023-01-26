/*
    Route: /infos
*/
const { Router } = require('express');
const { getInfos, getInfoById, getInfoByNir, getInfoByNom, postInfo} = require('../controllers/infos');


const router = Router();

router.get( '/', getInfos);

router.get( '/:id', getInfoById);

router.get( '/nir/:nir', getInfoByNir);

router.get( '/nom/:id', getInfoByNom);

router.post( '/', postInfo);

module.exports = router;