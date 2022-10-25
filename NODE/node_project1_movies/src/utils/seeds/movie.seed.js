//* requerimos mongoose
const mongoose = require("mongoose");

//* Nos traemos el modelo anteriormente generado
const Movie = require("../../api/models/movie");
const connectDb = require("../seeds/db");
//* requerimos dotenv y lo configuramos -> para poder acceder a mis variables de entorno
// require("dotenv").config();

//* cogemos la url de la base datos para conectarnos y la metemos dentro de la variable DB_URL
// const DB_URL = process.env.DB_URL;

const movies = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
  ];
  const moviesDocuments = movies.map((movie) => new Movie(movie))
  connectDb()
  .then(async () =>{
    await Movie.collection.drop();
    console.log("se han elinado guay los datos");
  })
  .catch((error) => console.log("no se ha podidio eliminar", error))
  .then(async () => {
    await Movie.insertMany(moviesDocument);
    console.log("se han creado guay los datos");
  } )
  .catch((error) => console.log("no he podido meter las peliculas", error))
  .finally(() => mongoose.disconnect());

