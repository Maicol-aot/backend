require('dotenv').config();

const express = require('express');
const cookieparser = require('cookie-parser');

const { conectarMongoDB } = require('./db/db');
const  { registrarControladores } = require('./controllers');

const app = express();
const port = process.env.PORT || 9000;

const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

conectarMongoDB();

registrarControladores(app);



//app.use(cookieparser());


//app.use(express.urlencoded());
//app.use(express.json());


app.listen(port, ()=> {
    console.log(`server listening on port: ${port}`)
});