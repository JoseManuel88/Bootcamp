const express = require("express");
require("dotenv").config();

const { connectDb } = require("./utils/db");

const Alumn = require("./models/alumn");

connectDb();

const PORT = process.env.PORT || 8080;

const server = express();
const router = express.Router();

router.get("/alumns", (req, res) => {

    Alumn.find()
    .then(alumns => {

        return res.status(200).json(alumns);

    }).catch((error) => {

        return res.status(500).json(error);

    })

});

router.get("/alumns/:id", (req, res) => {

    const id = req.params.id;

    Alumn.findById(id)
    .then(alumns => {

        return res.status(200).json(alumns);

    }).catch((error) => {

        return res.status(500).json(error);

    })

});

router.get("/alumns/city/:city", (req, res) => {

    const city = req.params.city;

    Alumn.find( {city: city} )
    .then(alumns => {

        return res.status(200).json(alumns);

    }).catch((error) => {

        return res.status(500).json(error);

    })

});

router.get("/alumns/age/:age", (req, res) => {

    const age = req.params.age;

    Alumn.find( {age: {$gt: age}} )
    .then(alumns => {

        return res.status(200).json(alumns);

    }).catch((error) => {

        return res.status(500).json(error);

    })

});

server.use("/", router);

server.listen(PORT, () => {

    console.log(`Server running in http://localhost:${PORT}`);

});