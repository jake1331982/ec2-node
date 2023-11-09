const express = require('express')
const app = express()
const port = 3000


// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));



app.get('/', (req, res) => {
  res.render("index",{titulo: "aa-nodejs"})
})

app.get('/servicios', (req, res) => {
    res.render('servicios',{titulodin: "dinamico titulo"})
  })

  app.use((req, res, next) =>{
    res.status(404).render("404",{
      titulo: "url invalida",
      descripcion: "favor de verificar"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})