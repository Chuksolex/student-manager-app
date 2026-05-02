require("dotenv").config();

const mysql = require("mysql2"); //require means import


// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
const db= mysql.createConnection({
  host: process.env.MYSQLHOST, 
  user: process.env.MYSQLUSER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

//VERSION CONTROL: WHICH MEANS TRACKING ALL CHANGES

db.connect((err) => {
     if (err) console.log("DB Error:", err); 
     else console.log("MySQL Connected!");
     }); 
     
module.exports = db;
