const { Schema, model } = require("mongoose");

//Creacion del esquema de equipos
const equiposSchema = new Schema({

    idEquipo:{
        type:String,
        unique:true
    },
    nombreEquipo:{
        type:String,
        required:true
    },
    liga:{
        type:String,
        required:true
    }
},{
    collection: 'Equipo'
});


exports.Equipos = model('Equipos', equiposSchema);
