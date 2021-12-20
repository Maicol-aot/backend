const express = require("express");
const { authGuard } = require('../middlewares/auth');
const { Eventos } = require("../models/Eventos"); //Importa el esquema eventos
const router=express.Router();

//Creacion de los eventos
router.post('/gestionarEventos', async (request, response)=>{ //pendiente por poner el authGuard
    const eventos = new Eventos(request.body);
    try {
        await eventos.save();
        response.json({mensaje : "Evento creado con exito." });  
        console.log('evento creado exitosamente')     

    } catch (error) {
        response.status(500).send("Ocurrió un error en la base de datos.");
        console.log(error);
    }
});

router.get('/listaEventosA', async (request, response)=>{
    
    try {
        
        const datosE = await Eventos.find().exec();
        response.send(datosE);
        console.log("se recibieron los datos de los eventos");

    }catch (e) {
        response.status(500).send("Ocurrió un error al intentar la conexión con la base de datos");
        console.log(e);
        await cerrarMongoDB();
    }
});

module.exports = router;