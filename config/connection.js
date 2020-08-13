'use strict';

require('dotenv').config();
const mysql = require('mysql');

const local = {
    host: 'localhost',
    port: process.env.PORT || 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWD,
    database: 'burgers_db'
};


const jawsdb = process.env.DATABASE_URL;
const connParams = (process.env.DATABASE_URL) ? jawsdb : local;
const connection = mysql.createConnection(connParams);


connection.connect(error => {
    if (error) {
        console.error('ERROR: Unable to make a connection' + error.stack);
        return;
    }

    console.log('Connected to database as ID: ' + connection.threadId);
});


module.exports = connection;