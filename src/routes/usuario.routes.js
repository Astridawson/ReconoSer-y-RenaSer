//IMPORTAMOS DEPENDENCIAS
//LAS RUTAS NOS CONECTAN EL FRONT QUE ESTE EN EL SERVIDOR CON NUESTRA LOGICA

import express from "express";
import { getUsuario, postUsuario, putUsuario, deleteUsuario  } from "../controllers/usuario.controller.js";

//DEFINIR UNA VARIABLE QUE ME VA A CONTENER TODAS LA RUTAS
const usuarioRouter = express.Router();

//DEFINIMOS LAS RUTAS ESPECIFICAS
//Ruta para obtener usuario
usuarioRouter.get("/obtenerUsuario", getUsuario);

//Ruta para crear usuario
usuarioRouter.post("/crearUsuario", postUsuario);

//Ruta para modificar usuario por su id o identificador unico
usuarioRouter.put("/modificarUsuario/:_id", putUsuario);

//Ruta para eliminar usuario por su id
usuarioRouter.delete("/eliminarUsuario/:_id", deleteUsuario);

//EXPORTAMOS LAS RUTAS

export default usuarioRouter;