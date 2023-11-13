const express = require('express');
const router = express.Router();
const conexion = require('./database/db')




router.get('/contacto', (req, res) =>{
     conexion.query("select * from customer", (error, results)=>{
        if (error){
            throw error;
        }else{
            res.render('index', {results:results});
        }
     })
})
//ruta inicio-app
router.get('/',(req,res)=>{
    res.render('inicio');
    
})

//ruta crear registros
router.get('/create',(req, res)=>{
    res.render('servicios');
})

//ruta para editar
router.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM customer WHERE id=?',[id],(error ,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit',{user:results[0]});
        }
    })
})

//ruta para eliminar
router.get('/delete/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE  FROM customer WHERE id =?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/contacto');
        }
    })
})



 const crud = require('./controllers/crud');
 router.post('/save', crud.save)

 router.post('/update', crud.update);

module.exports= router;