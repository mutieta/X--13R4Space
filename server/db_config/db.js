require('dotenv').config({path: '../.env'}); 
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_Host,    
  user: process.env.DB_User,   
  password: process.env.DB_Password, 
  database: process.env.DB_Name ,
  port:process.env.DB_Port
});

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MySQL database.');
  });

module.exports = db;
