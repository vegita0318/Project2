// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
 port: 3306,
 host: 'localhost',
 user: 'root',
 password: "",
 database: 'team_db'
});




// Make connection
connection.connect(function(err){
   if (err) {
       console.error('error connecting: ' + err.stack);
       return;
   }
   console.log('connected as id: ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;