const { Schema, model} =  require ('mongoose');

const InfoSchema = Schema({
    retour_systeme:                   {
        type: Boolean,
    },
    rei_siren:                   {
        type: String,
    },
    rei_denomination:                {
        type: String,
    },
    rei_code_naf:         {
        type: String,
    },
    rei_dt_creation:             {
        type: String,
    },
    rei_dt_debut:                 {
        type: String,
    },
    rei_voie:                {
        type: String,
    },
    rei_siret:          {
        type: String,
    },
    rei_urssaf:        {
        type: String,
    },
    rei_cp:        {
        type: String,
    },
    rei_cp_insee:        {
        type: String,
    },
    rei_comune:        {
        type: String,
    },
    rei_dt_fin:        {
        type: String,
    },
    rei_qualite_dir:        {
        type: String,
    },
    rei_nom:        {
        type: String,
    },
    rei_prenom:        {
        type: String,
    },
    rei_dt_naiss:        {
        type: String,
    },
    rei_lieu_naiss:        {
        type: String,
    },
    rei_titre:        {
        type: String,
    },
    rei_num_cext:        {
        type: String,
    },
    rei_num_cint:        {
        type: String,
    },
    //----------------------------------------------------------
    dpae_siret:        {
        type: String,
    },
    dpae_nom:        {
        type: String,
    },
    dpae_prenom:        {
        type: String,
    },
    dpae_dt_naiss:        {
        type: String,
    },
    dpae_dt_emb:        {
        type: String,
    },
    dpae_hr_emb:        {
        type: String,
    },
    dpae_dt_decl:        {
        type: String,
    },
    dpae_hr_decl:        {
        type: String,
    },
    //---------------------------------------
    dsn_adresse:        {
        type: String,
    },
    dsn_activite:        {
        type: String,
    },
    dsn_contrat:        {
        type: String,
    },
    dsn_dt_emb:         {
        type: String,
    },
    dsn_duree:        {
        type: String,
    },
    dsn_s_brut:        {
        type: String,
    },
    dsn_dernier_mois:        {
        type: String,
    },
    dsn_total:        {
        type: String,
    },
    dsn_nom:        {
        type: String,
    },
    dsn_prenom:        {
        type: String,
    },
    dsn_dt_naiss:        {
        type: String,
    },
    dsn_debut_contrat:        {
        type: String,
    },
    dsn_nir:        {
        type: String,
    },
    //---------------------------------
    obp7_num_compte:        {
        type: String,
    },
    obp7_to:        {
        type: String,
    },
    obp7_periode:        {
        type: String,
    },
    //--------------------------
    caae_num_compte:        {
        type: String,
    },
    caae_periodes:        {
        type: String,
    },
    caae_ca:        {
        type: String,
    },
    //----------------------------
    opc_num_intervention:        {
        type: String,
    },
    opc_dt_creation:        {
        type: String,
    },
    opc_realisateur:        {
        type: String,
    },
    opc_action:        {
        type: String,
    },
    opc_pilote:        {
        type: String,
    },
    opc_delegue:        {
        type: String,
    },
    opc_etat:        {
        type: String,
    },
    opc_dt_etat:        {
        type: String,
    }
});

InfoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})
module.exports = model( 'Info' , InfoSchema);
