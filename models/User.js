const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const {hash, genSalt, compare } = require('bcrypt');
//const ObjectId = mongoose.Schema.Types.ObjectId; pendiente por utilizar...

const userSchema = new Schema({

    id_usuario:{
        type:Number,
        unique:true,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    primerApellido:{
        type:String,
        required:true
    },
    segundoApellido:{
        type:String,
        required:true
    },
    fechaNacimiento:{
        type:String,
        required:true
    },
    tipoDoc:{
        type:String,
        required:true
    },
    nDoc:{
        type:Number,
        required:true
    },
    lugarExpedicion:{
        type:String,
        required:true
    },
    fechaExpedicion:{
        type:String,
        required:true
    },
    departamento:{
        type:String,
        required:true
    },
    municipio:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    movil:{
        type:String,
        required:true
    },
    usrname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        required:true
    },
    saldo:{
        type:Number,
        required:true
    }

},{
    collection: 'usuarios'
});

userSchema.pre('save', async function (next){
    console.log("Transformando contraseña");
    const salt = await genSalt(process.env.BCRIPT_ROUNDS );
    this.password = await hash(this.password, salt);
    next();
});

userSchema.methods.compararPasswords = async function (){
    console.log("Comparando contraseñas");
    return await compare(textPassword, this.password);
};


exports.User = model('User', userSchema);
