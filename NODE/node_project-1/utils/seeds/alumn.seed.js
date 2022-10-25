//* requerimos mongoose
const mongoose = require("mongoose");

//* Nos traemos el modelo anteriormente generado
const Alumn = require("../../models/alumn");

//* requerimos dotenv y lo configuramos -> para poder acceder a mis variables de entorno
require("dotenv").config();

//* cogemos la url de la base datos para conectarnos y la metemos dentro de la variable DB_URL
const DB_URL = process.env.DB_URL;

//* generamos un array con los datos que yo quiera, en este caso son alumnos con sus propiedades, tienen que ir de la manera que hemos indicado en nuestro modelo
const alumns = [

    {

        name: "Mario",
        age: 27,
        height: 1.82,
        city: "Barcelona"

    },
    {

        name: "Carlota",
        age: 37,
        height: 1.79,
        city: "Barcelona"
        
    },
    {
        
        name: "Marta",
        age: 22,
        height: 1.65,
        city: "Tarifa"

    },
    {
        
        name: "Luisfer",
        age: 25,
        height: 1.75,
        glasses: true,
        city: "Gijon"

    },
    {

        name: "Yago",
        age: 38,
        height: 1.72,
        glasses: false,
        city: "A Coruña"
        
    }

];

//* generamos un nuevo array con nuestros alumnos pasados por el filtro del modelo
const alumnsDocuments = alumns.map(alumn => new Alumn(alumn));

//* conectamos con la base de datos
mongoose.connect(DB_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(async () => {

    //* en el momento en el que conseguimos conectar vamos a buscar todos alumnos que tengamos y los guardamos en la variable allAlumns 
    const allAlumns = await Alumn.find();

    //* comprobamos si hay alumnos o no 
    if (allAlumns) {
        
        //* Eliminamos la colección en caso de que haya alumnos
        await Alumn.collection.drop();
        console.log("Se han eliminado todos los alumnos");

    }

})
.catch((error) => console.log("los datos no se han podido eliminar " + error))
.then(async () => {

    //* después de eliminarlos vamos a insertar varios documentos en mi colección de alumnos
    await Alumn.insertMany(alumnsDocuments);
    console.log("Se han generado los nuevos alumnos");

})
.catch((error) => console.log("No he podido meter los datos " + error))
.finally(() => mongoose.disconnect());