//* Requerimos mongoose
const mongoose = require("mongoose");

//* Guardamos el Schema
const Schema = mongoose.Schema;

//? crear nuestro esquema 
const alumnSchema = new Schema(
    {

        name: { type: String, required: true },
        age: { type: Number, required: true },
        glasses: { type: Boolean, required: false },
        height: { type: mongoose.Types.Decimal128, required: false },
        city: { type: String, required: true, enum: ["Barcelona", "Tarifa", "Gijon", "A Coruña"] }

    }, 
    {

        timestamps: true,

    }
)

//* Generamos la colección con el esquema previamente creado
const Alumn = mongoose.model("Alumn", alumnSchema);

//* Exportamos nuestro modelo
module.exports = Alumn;