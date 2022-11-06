const { Schema, model} =  require ('mongoose');

const EntrepriseSchema = Schema({

    id:                   {
        type: String,
    },
    siren_fiche:          {
        type: String,
    },
    denomination:         {
        type: String,
    },
    adresse_siege:        {
        type: String,
    },
    dirigent:          {
        type: String,
    },
    date_dirigeant:        {
        type: String,
    },
    lieu_dirigeant: {
        type: String,
    },
    notes_societe: {
        type: String,
    },
    date: {
        type: String,
    },
    archive:   {
        type: Boolean,
    },
    id_individus:            {
        type: Array,
    },
    notes_outils:            {
        type: Array,
    },
});

EntrepriseSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model( 'Entreprise' , EntrepriseSchema);