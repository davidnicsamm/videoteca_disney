const express = require('express');
const Router = express.Router();
const participaController = require('../controllers/participa-controller');

//Rutas
Router.post('/create', participaController.create);
Router.put('/update/:id', participaController.update);
Router.delete('/delete', participaController.delete)

module.exports = Router;
