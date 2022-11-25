const { Schema, model} =  require ('mongoose');

const ControleSchema = Schema({

    id:                   {
        type: String,
    },
    nomControle:          {
        type: String,
    },    
    newControle:          {
        type: Boolean,
    },
    etat:                 {
        type: String,
    },
    dt_controle:          {
        type: String,
    },
    hr_controle:          {
        type: String,
    },
    lieu_controle:        {
        type: String,
    },
    inspecteurs_controle: {
        type: Array,
    },
    partenaires_controle: {
        type: Array,
    },
    entreprises_controle: {
        type: Array,
    },
    individus_controle:   {
        type: Array,
    },
    notesCont:            {
        type: Array,
    },
});

ControleSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})


module.exports = model( 'Controle' , ControleSchema);