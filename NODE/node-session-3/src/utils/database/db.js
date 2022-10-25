const mongoose = require('mongoose');

//Ruta de la base3 de datos. Esta es local ,podria ser la ruta de mongo atlas.

const DB_URL = 'mongodb://localhost:27017/dragon-ball';//nombre de las base de datos aun no nesta creada
// comprobacion
if (!DB_URL) trhow new Error('No se encuentra la URL a la base de datos');  //si no tengo DB_URL me protejo
//creo una funcion asyncrona CUANDO SE EJECUTE SERA LA RESPONSABLE DE CREAR UNA CONEXION CON LA BASE DE DATOS, PARA GUARDAR Y LEER DATOS
const connectDb = async () => {
try{//bloque try catch,pruebame este codigo y si no funciona ehjecutame esto
    const db =  await mongoose.connect(DB_URL);//cuando se ejecute la conexion con la base de datos nos devolvera un objeto bastante grande enter ellas el nombre de lka base de datos y el hhal don de con3ecto
    const { name, host } = db.connection;
    console.log(`Conectado con exito a la db ${name} en ${host}`);
}catch(error){
console.log('Error conectando a la base de datos:', error);
}
};
module.exports = {//exportamos un objeto 
    connectDb,
};