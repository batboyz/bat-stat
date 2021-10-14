const mysql = require('mysql');
const { promisify } = require('util');


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = {
  query: async (q) => {
    const sql = mysql.createConnection({
      host: process.env.BS_HOST || 'localhost',
      port: process.env.BS_PORT || 3306,
      user: process.env.BS_USER || 'root',
      password: process.env.BS_PASSWORD || 'HR', // my local pw
      database: 'bat_stat'
    });

    const performQuery = promisify(sql.query.bind(sql))

    const response = await performQuery(q).catch(err => { throw err });
    sql.end()
    return response
  }
}