require('dotenv').config();
const express = require('express');
const cookieparser = require('cookie-parser');
const { conectarMongoDB } = require('./db/db');
const cors = require('cors');

//Llama al export "registrarControladores" previamente creado en el controllers/index.js
const  { registrarControladores } = require('./controllers');

const app = express();
app.use(cors());
const port = process.env.PORT || 9000;


app.use(cookieparser())

//Utilizacion del body-parser para que lea el cuerpo de las peticiones
const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));


//conexion a la base de datos
conectarMongoDB();

registrarControladores(app);


app.listen(port, ()=> {
    console.log(`server listening on port: ${port}`)
});