const { response } = require('express');
const Entreprise = require('../models/entreprise');

const getEntreprises = async (req, res) => {

    const entreprises = await Entreprise.find();
    console.log('GET /entreprises 200');
    res.json(entreprises)
}

const getEntrepriseById = async (req, res) => {

    const id = req.params.id    

    try {
        const entreprise = await Entreprise.findById(id);
        if (!entreprise) {
            return   res.status(404).json({
                ok: false,
                msg: 'ID not found in DB !'
            })
        }
        //Reponse serveur
        console.log('GETbyID /entreprises 200 id: ' ,id);
        res.json(entreprise)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error in GetById request'
        })
        
    }
}

const postEntreprise = async(req, res) => {

    const entreprise = new Entreprise( req.body );

    await entreprise.save();
    console.log('POST /entreprises 201 id: ' ,res.id);
    res.json(entreprise);
}

const putEntreprise = async(req, res = response) => {

    const id = req.params.id

    try {
        const entreprise = await Entreprise.findById(id);

        if (!entreprise) {
            return   res.status(404).json({
                ok: false,
                msg: 'ID not found in DB !'
            })
        }
        //Mise à jour
        const info = req.body;
        const entrepriseUpdated = await Entreprise.findByIdAndUpdate( id, info, {new : true});

        console.log('PUT /entreprises 200 id: ' ,id);
        res.json(entrepriseUpdated);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error in put request'
        })
    }

}

const deleteEntreprise = async(req, res = response) => {

    const id = req.params.id
    try {

        const entreprise = await Entreprise.findById(id);

        if (!entreprise) {
            return   res.status(404).json({
                ok: false,
                msg: 'ID not found in DB !'
            })
        }

        //Delete Entreprise
        console.log('DELETE /entreprises 200 id: ' ,id);
        await Entreprise.findByIdAndDelete( id);

        
        res.json({})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Enexpected error in delete request'
        })
    }

}

module.exports = {
    getEntreprises,
    getEntrepriseById,
    postEntreprise,
    putEntreprise,
    deleteEntreprise
}