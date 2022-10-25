//* Requerimos mongoose
const mongoose = require("mongoose");

//* Guardamos el Schema
const Schema = mongoose.Schema;


const movieSchema = new Schema(
  {
    title: { type: String, required:true },
    director: { type: String, required:true },
    year: { type: Number, required:true },
    genre: { type: String, required:true,
    enum:["Comedia romantica", "Ciencia ficicion", "Animacion", "Accion" ],
}
  },
  {
    timestamps: true,
  }
);

//* Generamos la colección con el esquema previamente creado
const Movie = mongoose.model("movies", movieSchema);

//* Exportamos nuestro modelo
module.exports = Movie;
