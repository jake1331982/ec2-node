const mysql = require('mysql2')


const conexion = mysql.createConnection({
    host: "127.0.0.1",
    user: "foo",
    password: "bar",
    database: "dbnode",
    port: 3306
  });
  
  conexion.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  

  module.exports= conexion;
  