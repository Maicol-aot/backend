require('dotenv').config();
const express = require('express');
const { conectarMongoDB} = require('./db');

const app = express();
const port = process.env.PORT || 9000;


conectarMongoDB();

app.listen(port, ()=> {
    console.log(`server listening on port: ${port}`)
});

app.get('/prueba/json', (req,res)=>{
    res.send('welcome to my api');
});