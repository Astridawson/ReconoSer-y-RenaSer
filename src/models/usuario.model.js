//IMPORTAR LAS DEPENDENCIAS QUE NECESITAMOS
import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

//AHORA NOS CREAMOS NUESTRO ESQUEMA DE DATOS QUE ES QUE VAMOS A GUARDAR EN NUESTRA BASE DE DATOS --> esttructura

const usuarioSchema = new schema ({

    nombreCompleto: { 
        type: String, 
        require: true
    },
    correoElectronico : {
        type: String,
        require : true
    },
    contrasena: {
        type: String,
        require : true
    }
})

//YO QUIERO ENVIAR LA PLANTILLA A NUESTRA BASE DE DATOS
// CREAR NUESTRO MODELO

const usuarioModel = mongoose.model("usuario", usuarioSchema);

//EXPORTAMOS NUESTRO MODELO

export default usuarioModel;