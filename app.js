const express = require('express')
const app = express()
const port = 5000
const mysql = require('mysql2')



 
// Motor de plantilla
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));

app.use('/', require('./router'));
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));




 /*  app.use((req, res, next) =>{
    res.status(404).render("404",{
      titulo: "url invalida",
      descripcion: "favor de verificar"
    })
}) */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports