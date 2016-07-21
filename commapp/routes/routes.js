var express = require('express');
var router = express.Router();

var controllers = require('.././controllers');

/* GET home page. */
router.get('/', controllers.homecontroller.index);


// ruta para comercios
router.get('/comercios', controllers.comercioscontroller.getComercios);
router.get('/nuevo', controllers.comercioscontroller.getNuevoComercio);
router.post('/crearcomercio', controllers.comercioscontroller.postNuevoComercio);
router.post('/eliminarcomercio', controllers.comercioscontroller.eliminarComercio);
router.get('/modificar/:id', controllers.comercioscontroller.getModificarComercio);
router.post('/editar', controllers.comercioscontroller.postModificarComercio);


module.exports = router;
