//IMPORTAMOS LAS DEPENDENCIAS QUE NECEISTAMOS
import mongoose from "mongoose";

//CREAR UN FUNCION QUE NOS CONECTE LA BASE DE  DATOS

const conexionMongo = async()=>{

await mongoose.connect(process.env. BD_URL,{})

//CONTROL DE ERRORES CON Try - Catch
try{
    console.log("Conexión exitosa");
}
    catch(error){
console.log ("Error de Conexion:", error. message);

    }

}
//TENEMOS QUE EXPORTAR 
export default conexionMongo;
