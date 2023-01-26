//DB Credentials livelcti_user MJznK6OQtVYIDGy4
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path')

const {dbConnection} = require('./database/config');

//crééer le serveur express
const app = express();

//Public Directory
app.use( express.static('public') );

//Configurer cors
app.use( cors() );

//Lecture and parsing of body
app.use( express.json() );

//base de datos
dbConnection();

//routes
app.use( '/controles', require('./routes/controles') );
app.use( '/entreprises', require('./routes/entreprises') );
app.use( '/individus', require('./routes/individus') );
app.use( '/infos', require('./routes/infos') );

//Other routes management
app.get('*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html'))
})


app.listen ( process.env.PORT, () => {
    console.log('Server running on port ' + process.env.PORT);
});
