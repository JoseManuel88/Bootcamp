const express = require("express");
require("dotenv").config();
const connectDb = require("./src/utils/seeds/db")

const PORT = process.env.PORT ||8080;

const server = express();

connectDb();
server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});