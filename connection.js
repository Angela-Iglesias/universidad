const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "universidad",
});

connection.connect(error => {
    if(error) throw error;
    console.log("Se ha establecido con éxito la conexión con la base de datos universidad");
});

module.exports = connection;