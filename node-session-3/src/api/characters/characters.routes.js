const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{  //funcion controlador de  la ruta
return res.status(200).json('TODO OK');
});
module.exports = router; //exportamos el router