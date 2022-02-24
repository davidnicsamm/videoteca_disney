const express = require('express');
const Router = express.Router();
const personajeController = require('../controllers/personaje-controller.js');

//Rutas
Router.get('/list', personajeController.read);
Router.get('/readByName/',personajeController.readByName);
Router.get('/readByAge/', personajeController.readByAge);
Router.get('/readByPeso/', personajeController.readByPeso);
Router.get('/readByMovie/', personajeController.readByMovie);
Router.post('/create', personajeController.create)
Router.put('/update/:id', personajeController.update)
Router.delete('/delete', personajeController.delete),


module.exports = Router;
