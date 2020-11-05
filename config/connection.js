const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "0000",
    database: "eat_da_burger_db",
});

connection.connect((err) =>
    err
        ? console.log("error connecting: " + err.stack)
        : console.log("connected as id " + connection.threadId)
);

module.exports = connection;
