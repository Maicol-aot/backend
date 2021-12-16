const express = require("express");
const { Equipos } = require("../models/Equipos"); //Importa el esquema de equipo
const router=express.Router();

//Creacion de los equipos
router.post('/generarEquipos', async (request, response)=>{
    const equipos = new Equipos(request.body);
    try {
        await equipos.save();
        response.send({"mensaje" : "Equipo creado con exito." });        
    } catch (error) {
        response.status(500).send("Ocurrió un error en la base de datos de usuarios.");
        console.log(error);
    }
});

module.exports = router;