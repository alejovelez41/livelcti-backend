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
    type_statut:        {
        type: String,
    },
    dt_creation:        {
        type: String,
    },
    autre_statut:        {
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
    adresse_perso:        {
        type: String,
    },
    cp_perso:        {
        type: String,
    },
    ville_perso:        {
        type: String,
    },
    difference_adresse:        {
        type: Boolean,
    },
    adresse_pro:        {
        type: String,
    },
    cp_pro:        {
        type: String,
    },
    ville_pro:        {
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
    replique:        {
        type: Object,
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
    idEntPerso:        {
        type: String,
    },
    denominationEntPerso:        {
        type: String,
    },
    siren_fichePerso:        {
        type: String,
    },
    adresse_siegePerso:        {
        type: String,
    },

    signature_cloture:        {
        type: String,
    },
    notesInd: {
        type: Array,
    },
    infos: {
        type: Object,
    }
});

IndividuSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})
module.exports = model( 'Individu' , IndividuSchema);
