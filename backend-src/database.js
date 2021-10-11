const mysql = require('mysql');


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

const sql = mysql.createConnection({
  host: '3.101.35.84', // process.env.HOST
  port: '3306', // process.env.PORT
  user: 'root', // process.env.ROOT
  password: 'my-secret-pw' // 'HR', // process.env.PASSWORD
  // database: 'chat' // process.env.DB_NAME
});

sql.query('SHOW DATABASES;', (err, data) => err ? console.log(err) : console.log(data));