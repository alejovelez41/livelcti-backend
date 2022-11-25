const { response } = require('express');
const Controle = require('../models/controle');

const getControles = async (req, res) => {

    const controles = await Controle.find();
    console.log('GET /controles 200 ' );
    res.json(controles)
}

const getControleById = async (req, res) => {

    const id = req.params.id    

    try {
        const controle = await Controle.findById(id);
        if (!controle) {
            return   res.status(404).json({
                ok: false,
                msg: 'ID not found in DB !'
            })
        }
        //Reponse serveur
        console.log('GETbyID /controles 200 id: ' ,id);
        res.json(controle)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error in GetById request'
        })        
    }
}

const postControle = async(req, res) => {

    const controle = new Controle( req.body );

    await controle.save();
    console.log('POST /controles 201 id: ' ,res.id);
    res.json(controle);
}

const putControle = async(req, res = response) => {

    const id = req.params.id

    try {
        const controle = await Controle.findById(id);

        if (!controle) {
            return   res.status(404).json({
                ok: false,
                msg: 'ID not found in DB !'
            })
        }
        //Mise à jour
        const info = req.body;
        const controleUpdated = await Controle.findByIdAndUpdate( id, info, {new : true});

        console.log('PUT /controles 200 id: ' ,id);
        res.json(controleUpdated);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error in put request'
        })
    }

}

const deleteControle = async(req, res = response) => {

    const id = req.params.id
    try {

        const controle = await Controle.findById(id);

        if (!controle) {
            return   res.status(404).json({
                ok: false,
                msg: 'ID not found in DB !'
            })
        }

        //Delete Controle
        console.log('DELETE /controles 200 id: ' ,id);
        await Controle.findByIdAndDelete( id);

        
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
    getControles,
    getControleById,
    postControle,
    putControle,
    deleteControle
}