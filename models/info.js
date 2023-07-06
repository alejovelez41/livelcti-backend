const { Schema, model} =  require ('mongoose');

const InfoSchema = Schema({
    retour_systeme:                   {
        type: String,
    },
    rei_siret:          {
        type: String,
    },
    rei_lib_voie:                {
        type: String,
    },
    rei_no_voie:                {
        type: String,
    },
    rei_rep_voie:                {
        type: String,
    },
    rei_typ_voie:                {
        type: String,
    },
    rei_base_urssaf:        {
        type: String,
    },
    rei_cp:        {
        type: String,
    },
    rei_comune:        {
        type: String,
    },
    rei_dt_fin:        {
        type: String,
    },
    rei_siren:                   {
        type: String,
    },
    rei_denomination:                {
        type: String,
    },
    rei_dt_creation:             {
        type: String,
    },
    rei_dt_debut:                 {
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
    dpae_dt_decl:        {
        type: String,
    },
    //---------------------------------------
    nir:        {
        type: String,
    },
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
    //---------------------------------
    obp7_to:        {
        type: String,
    },
    obp7_periode:        {
        type: String,
    },
    //--------------------------
    caae_periode_1:        {
        type: String,
    },
    caae_periode_2:        {
        type: String,
    },
    caae_periode_3:        {
        type: String,
    },
    caae_periode_4:        {
        type: String,
    },
    caae_periode_5:        {
        type: String,
    },
    caae_periode_6:        {
        type: String,
    },
    caae_periode_7:        {
        type: String,
    },
    caae_periode_8:        {
        type: String,
    },
    caae_periode_9:        {
        type: String,
    },
    caae_periode_10:        {
        type: String,
    },
    caae_periode_11:        {
        type: String,
    },
    caae_periode_12:        {
        type: String,
    },
    caae_ca_1:        {
        type: String,
    },
    caae_ca_2:        {
        type: String,
    },
    caae_ca_3:        {
        type: String,
    },
    caae_ca_4:        {
        type: String,
    },
    caae_ca_5:        {
        type: String,
    },
    caae_ca_6:        {
        type: String,
    },
    caae_ca_7:        {
        type: String,
    },
    caae_ca_8:        {
        type: String,
    },
    caae_ca_9:        {
        type: String,
    },
    caae_ca_10:        {
        type: String,
    },
    caae_ca_11:        {
        type: String,
    },
    caae_ca_12:        {
        type: String,
    },
    //----------------------------
    opc_num_intervention:        {
        type: String,
    },
    opc_realisateur:        {
        type: String,
    },
    opc_dt_creation:        {
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
