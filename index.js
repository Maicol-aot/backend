require('dotenv').config();
const express = require('express');
const { conectarMongoDB} = require('./db/db');
const UsersController = require('./controllers/UsersController');

const app = express();
const port = process.env.PORT || 9000;

conectarMongoDB();



app.use(express.json());
app.use('/api', UsersController);



app.listen(port, ()=> {
    console.log(`server listening on port: ${port}`)
});

app.get('/prueba/json', (req,res)=>{
    res.send('welcome to my api');
});