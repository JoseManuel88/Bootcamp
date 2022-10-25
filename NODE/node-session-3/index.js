const express = require('express');
const db = require('./src/utils/database/db');//conectamos con la base de datos
const indexRoutes = require('./src/api/index/index.routes'); //importamos el router
const characterRoutes = require('./src/api/characters/characters.routes');//importamos el router

db.connectDb();
const server = express();
const PORT = 3000;



server.use('/', indexRoutes)//le indicamos al servidor que para todo prefijo que empieze
//  por '/character' quiero que lo busques en esta ruta 'indexRoutes'
server.use('/characters', characterRoutes); //le indicamos al servidor que para todo prefijo que empieze
//  por '/character' quiero que lo busques en esta ruta 'characterRoutes'
server.listen(PORT, () => {
    console.log(`Servidor a todo gas en http://localhost:${PORT}`);
});
