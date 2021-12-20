const { Schema, model } = require("mongoose");

//Creacion del esquema de eventos
const eventosSchema = new Schema({


    nombreEvento:{
        type:String,
        required:true
    },
    nombreLiga:{
        type:String,
        required:true
    },
    dateInit:{
        type:String,
        required:true
    },

    dateEnd:{
        type:String,
        required:false
    },

    timeInit:{
        type:String,
        required:true
    },
    limitDate:{
        type:String,
        required:true
    },
    cuota1:{
        type:String,
        required:true
    },
    cuota2:{
        type:String,
        required:true
    },
    cuotaX:{
        type:String,
        required:true
    },
    profit:{
        type:String,
        required:false
    },
    nApostadores:{
        type:Number,
        required:false
    },
    resultado1:{
        type:String,
        required:false
    },
    resultado2:{
        type:String,
        required:false
    },
    estadoActivo:{
        type:Boolean,
        required:true
    }
},{
    collection: 'Eventos'
});


exports.Eventos = model('Eventos', eventosSchema);
