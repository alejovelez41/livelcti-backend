//DB Credentials livelcti_user MJznK6OQtVYIDGy4
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const {dbConnection} = require('./database/config');

//crééer le serveur express
const app = express();

//Configurer cors
app.use( cors() );

//base de datos
dbConnection();


app.get( '/', (req, res) => {
    res.json({
        ok: true,
        msg: 'hola mundo'
    })
});

app.listen ( process.env.PORT, () => {
    console.log('Server running on port ' + process.env.PORT);
});
