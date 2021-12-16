const { Schema, model } = require("mongoose");

//Creacion del esquema de eventos
const eventosSchema = new Schema({

    idEvento:{
        type:Number,
        unique:true,
    },
    nombreEvento:{
        type:String,
        required:true
    },
    nombreLiga:{
        type:String,
        required:true
    },
    dateInit:{
        type:Date,
        required:true
    },
    dateEnd:{
        type:Date,
        required:true
    },
    limitDate:{
        type:Date,
        required:true
    },
    cuota1:{
        type:Number,
        required:true
    },
    cuota2:{
        type:Number,
        required:true
    },
    cuotaX:{
        type:Number,
        required:true
    },
    profit:{
        type:Number,
        required:true
    },
    nApostadores:{
        type:Number,
        required:true
    },
    resultado1:{
        type:String,
        required:true
    },
    resultado2:{
        type:String,
        required:true
    },
    estadoActivo:{
        type:Boolean,
        required:true
    }
},{
    collection: 'Eventos'
});


exports.Eventos = model('Eventos', eventosSchema);
