//IMPORTAMOS DEPENDENCIAS

import usuarioModel from "../models/usuario.model.js";


/* CREAR LOGICA DE PETICIONES
//1.  GET = MOSTRAR MUESTRA MIS USUARIOS
//2.  POST = CREAR CREA UN USUARIO
//3.  PUT= MODIFICAR MODIFICA USUARIO
//4.  DELETE = ELIMINAR ELIMINA USUARIO

*/
//PRUEBA INICIAL
//LOGICA PARA MOSTRAR USUARIOS

export const getUsuario = async(req, res) => {
    //manejo de errores con try y catch
    try{
    let usuarios = await usuarioModel.find();
    return res.send(usuarios);
    }catch(error){
        return res.json({error: "error al mostrar los datos" + error});
    }

}

//LÓGICA PARA CREAR USUARIOS
export const postUsuario = async(req, res) => {
    //manejo de errores con try y catch

    try{
        let datosUsuario = req.body;
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);

    }catch(error){
        //Para que me muestre un mensaje que me indique cuál es el error
        return res.json({error: "error al crear el usuario", message:error.message});
    }

}


//LÓGICA PARA MODIFICAR USUARIOS POR ID

export const putUsuario = async(req, res) => {
    try{
        let datosModificar = req.body;
        let idModificar = req.params._id; await usuarioModel.findByIdAndUpdate(idModificar,datosModificar);
       
        return res.json({message:"Usuario actualizado correctamente"});
        
    }catch(error){
        return res.json({error: "error al modificar usuario", message:error.message});
    }
}


//LÓGICA PARA ELIMINAR USUARIOS POR ID
export const deleteUsuario = async(req, res) => {
    try{
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);

        if(usuarioEliminado){
            return res.json({message: "Usuario eliminado correctamente"});
        } else{
            return res.json({message: "Ups! no se pudo eliminar ese usuario"});
        }

    }catch(error){
        return res.json({error: "error al eliminar usuario", message:error.message});
    }
}
