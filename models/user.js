const { Schema, model} = require('mongoose');

const UserSchema = Schema({
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img:{
        type: String
    },
});

module.exports = model( 'User', UserSchema );