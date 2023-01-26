const { response } = require('express');
const Info = require('../models/info');

const getInfos = async (req, res) => {

    const infos = await Info.find();
    console.log('GET /infos 200 ' );
    res.json(infos)
}

const getInfoById = async (req, res) => {

    const id = req.params.id    

    try {
        const info = await Info.findById(id);
        if (!info) {
            return   res.status(404).json({
                ok: false,
                msg: 'ID not found in DB !'
            })
        }
        //Reponse serveur
        console.log('GETbyID /infos 200 id: ' ,id);
        res.json(info)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error in GetById request'
        })        
    }
}

const getInfoByNir = async (req, res) => {

    const nir = req.params.nir

    try {
        const info = await Info.findOne({dsn_nir: nir});
        if (!info) {
            return   res.status(404).json({
                ok: false,
                msg: 'NIR not found in DB !'
            })
        }
        //Reponse serveur
        console.log('GETbyNir /controles 200 nir: ' ,nir);
        res.json(info)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error in GetByNir request'
        })        
    }
}

const getInfoByNom = async (req, res) => {

    const nom = req.params.nom
    const prenom = req.params.prenom
    const dt_naiss = req.params.dt_naiss  

    try {
        const info = await Info.find({dpae_nom: nom, dpae_prenom: prenom, dpae_dt_naiss: dt_naiss});
        if (!info) {
            return   res.status(404).json({
                ok: false,
                msg: 'nom prenom et dt_naiss not found in DB !'
            })
        }
        //Reponse serveur
        console.log('GETbyNom /info 200 id: ' ,);
        res.json(info)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error in GetByNom request'
        })        
    }
}

const postInfo = async(req, res) => {

    const info = new Info( req.body );

    await info.save();
    console.log('POST /Infos 201 id: ' ,res.id);
    res.json(info);
}

// const putControle = async(req, res = response) => {

//     const id = req.params.id

//     try {
//         const controle = await Controle.findById(id);

//         if (!controle) {
//             return   res.status(404).json({
//                 ok: false,
//                 msg: 'ID not found in DB !'
//             })
//         }
//         //Mise à jour
//         const info = req.body;
//         const controleUpdated = await Controle.findByIdAndUpdate( id, info, {new : true});

//         console.log('PUT /controles 200 id: ' ,id);
//         res.json(controleUpdated);
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             ok: false,
//             msg: 'Unexpected error in put request'
//         })
//     }

// }

// const deleteControle = async(req, res = response) => {

//     const id = req.params.id
//     try {

//         const controle = await Controle.findById(id);

//         if (!controle) {
//             return   res.status(404).json({
//                 ok: false,
//                 msg: 'ID not found in DB !'
//             })
//         }

//         //Delete Controle
//         console.log('DELETE /controles 200 id: ' ,id);
//         await Controle.findByIdAndDelete( id);

        
//         res.json({})
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             ok: false,
//             msg: 'Enexpected error in delete request'
//         })
//     }

// }

module.exports = {
    getInfos,
    getInfoById,
    getInfoByNir,
    getInfoByNom,
    postInfo
}