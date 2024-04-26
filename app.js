const express = require('express')
const app = express()
const port = 5000
const mysql = require('mysql2')
const AWS  = require('aws-sdk');
const fs = require('fs');
const multer = require('multer');



 
// Motor de plantilla
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));

app.use('/', require('./router'));
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));




const s3 = new AWS.S3();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.single('image'), (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: 'No se ha seleccionado ninguna imagen.' });
    }

    const filePath = file.path;
    const fileName = file.originalname;
    const bucketName = 'proyectovla2024';

    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: fs.createReadStream(filePath),
        ContentType: 'image/jpeg' // Opcional, define el tipo MIME del archivo
    };

    s3.upload(params, (err, data) => {
        if (err) {
            console.error('Error al subir la imagen a S3:', err);
            return res.status(500).json({ message: 'Error al subir la imagen a S3. Por favor, inténtalo de nuevo.' });
        }
        
        fs.unlinkSync(filePath); // Eliminar el archivo temporal subido al servidor

        const imageUrl = data.Location;
        return res.status(200).json({ message: 'La imagen se ha subido exitosamente a S3.', imageUrl });
    });
});



 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports