const express = require('express');
const Router = express.Router();
const generoPSController = require('../controllers/genero-peliculaserie-controller');

//Rutas
Router.post('/create', generoPSController.create);
Router.put('/update/:id', generoPSController.update);
Router.delete('/delete', generoPSController.delete);

module.exports = Router;