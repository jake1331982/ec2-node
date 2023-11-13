const conexion = require('../database/db')

exports.save = (req,res)=>{
    const name =req.body.name;
    const address =req.body.address;
    const phone =req.body.phone;
    //console.log(name + " -"+address + " -" +phone);
    conexion.query('INSERT INTO customer SET ?',{name:name, address:address, phone:phone},(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/contacto');
        }
    })
};

exports.update = (req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;
    const phone = req.body.phone;
    conexion.query('UPDATE customer SET ? WHERE id = ?', [{name:name, address:address, phone:phone}, id ], (error ,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/contacto')
        }
    })

}