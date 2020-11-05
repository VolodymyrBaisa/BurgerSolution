const mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "0000",
        database: "eat_da_burger_db",
    });
}

connection.connect((err) =>
    err
        ? console.log("error connecting: " + err.stack)
        : console.log("connected as id " + connection.threadId)
);

module.exports = connection;
