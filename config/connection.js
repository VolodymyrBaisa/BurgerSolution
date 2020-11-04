const mysql = require("mysql");

module.exports.connections = mysql
    .createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "0000",
        database: "eat_da_burger_db",
    })
    .connect((err) =>
        err
            ? console.log("error connecting: " + err.stack)
            : console.log("connected as id " + connection.threadId)
    );
