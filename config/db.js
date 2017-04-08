var mysql = require('mysql');

var option = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'dabai'
}

var __poolconn = mysql.createPool(option);
var __dbconn = mysql.createConnection(option);

module.exports = {
    pool: __poolconn,
    db: __dbconn
};