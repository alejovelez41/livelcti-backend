const { Schema, model} =  require ('mongoose');

const IndividuSchema = Schema({

    id:                   {
        type: String,
    },
    refus:                {
        type: Boolean,
    },
    consentement:         {
        type: Boolean,
    },
    archived:             {
        type: Boolean,
    },
    date:                 {
        type: String,
    },
    heure:                {
        type: String,
    },
    description:          {
        type: String,
    },
    nom:        {
        type: String,
    },
    prenom:        {
        type: String,
    },
    typePI:        {
        type: String,
    },
    numeroPI:        {
        type: String,
    },
    signature:        {
        type: String,
    },
    statut:        {
        type: String,
    },
    fonction:        {
        type: String,
    },
    nir:        {
        type: String,
    },
    siret:        {
        type: String,
    },
    siren:        {
        type: String,
    },
    civilite:        {
        type: String,
    },
    dt_naissance:        {
        type: String,
    },
    lieu_naissance:        {
        type: String,
    },
    nationalite_fr:        {
        type: String,
    },
    pays_naissance:        {
        type: String,
    },
    tel:        {
        type: String,
    },
    n_voie:        {
        type: String,
    },
    bis:        {
        type: String,
    },
    libelle:        {
        type: String,
    },
    complement:        {
        type: String,
    },
    cp:        {
        type: String,
    },
    ville:        {
        type: String,
    },
    autre_statut:        {
        type: String,
    },
    emploi:        {
        type: String,
    },
    contrat:        {
        type: String,
    },
    interimaire:         {
        type: Boolean,
    },
    sirenI:        {
        type: String,
    },
    denominationI:        {
        type: String,
    },
    adresse_siegeI:        {
        type: String,
    },
    dt_embauche:        {
        type: String,
    },
    duree:        {
        type: String,
    },
    bullentins:        {
        type: String,
    },
    hsup:        {
        type: String,
    },
    sbrut:        {
        type: String,
    },
    fsalaire:        {
        type: String,
    },
    montant:        {
        type: String,
    },
    remunere:        {
        type: String,
    },
    ca:        {
        type: String,
    },
    rmensuelle:        {
        type: String,
    },
    snombre:        {
        type: String,
    },
    total:        {
        type: String,
    },
    identites:        {
        type: String,
    },
    soustraitant:        {
        type: String,
    },
    identite_do:        {
        type: String,
    },
    s_partie_activite:        {
        type: String,
    },
    id_soustraitants:        {
        type: String,
    },
    lundi:        {
        type: Object,
    },
    mardi:        {
        type: Object,
    },
    mercredi:        {
        type: Object,
    },
    jeudi:        {
        type: Object,
    },
    vendredi:        {
        type: Object,
    },
    samedi:        {
        type: Object,
    },
    dimanche:        {
        type: Object,
    },
    lundiSup:        {
        type: Object,
    },
    mardiSup:        {
        type: Object,
    },
    mercrediSup:        {
        type: Object,
    },
    jeudiSup:        {
        type: Object,
    },
    vendrediSup:        {
        type: Object,
    },
    samediSup:        {
        type: Object,
    },
    dimancheSup:        {
        type: Object,
    },
    totalSem:        {
        type: String,
    },
    idEnt:        {
        type: String,
    },
    denominationEnt:        {
        type: String,
    },
    siren_fiche:        {
        type: String,
    },
    adresse_siege:        {
        type: String,
    },
    signature_cloture:        {
        type: String,
    },
    notesInd: {
        type: Array,
    }
});

IndividuSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})
module.exports = model( 'Individu' , IndividuSchema);
