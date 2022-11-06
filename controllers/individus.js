const { response } = require('express');
const Individu = require('../models/individu');

const getIndividus = async (req, res) => {

    const individus = await Individu.find();
    console.log('GET /individus 200 ' );
    res.json(individus)
}

const getIndividuById = async (req, res) => {

    const id = req.params.id    

    try {
        const individu = await Individu.findById(id);
        if (!individu) {
            return   res.status(404).json({
                ok: false,
                msg: 'ID not found in DB !'
            })
        }
        //Reponse serveur
        console.log('GETbyID /individus 200 id: ' ,id);
        res.json(individu)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error in GetById request'
        })
        
    }
}

const postIndividu = async(req, res) => {

    const individu = new Individu( req.body );

    await individu.save();
    console.log('POST /individus 201 id: ' ,res.id);
    res.json(individu);
}

const putIndividu = async(req, res = response) => {

    const id = req.params.id

    try {
        const individu = await Individu.findById(id);

        if (!individu) {
            return   res.status(404).json({
                ok: false,
                msg: 'ID not found in DB !'
            })
        }
        //Mise à jour
        const info = req.body;
        const individuUpdated = await Individu.findByIdAndUpdate( id, info, {new : true});

        console.log('PUT /individus 200 id: ' ,id);
        res.json(individuUpdated);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error in put request'
        })
    }

}

const deleteIndividu = async(req, res = response) => {

    const id = req.params.id
    try {

        const individu = await Individu.findById(id);

        if (!individu) {
            return   res.status(404).json({
                ok: false,
                msg: 'ID not found in DB !'
            })
        }

        //Delete Individu
        console.log('DELETE /individus 200 id: ' ,id);
        await Individu.findByIdAndDelete( id);

        
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
    getIndividus,
    getIndividuById,
    postIndividu,
    putIndividu,
    deleteIndividu
}