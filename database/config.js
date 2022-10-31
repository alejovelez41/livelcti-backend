const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {
    
    try {
        await mongoose.connect(process.env.DB_CNN,{
        useNewUrlParser: true,
        useUnifiedTopology: true
        });

        console.log('DataBase Online')


    } catch (error) {
        console.log(error);
        throw new Error('Error when initializing the Data base');

    }
    
}

module.exports = {
    dbConnection
}

