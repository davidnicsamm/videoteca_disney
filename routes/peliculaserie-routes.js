const express = require('express');
const Router = express.Router();
const peliculaSerieController = require('../controllers/peliculaserie-controller');

//Rutas
Router.get('/list', peliculaSerieController.read);
Router.get('/readByTitle/', peliculaSerieController.readByTitle);
Router.get('/readByGenre', peliculaSerieController.readByGenre);
Router.get('/readByOrder', peliculaSerieController.readByOrder);
Router.post('/create', peliculaSerieController.create);
Router.put('/update/:id', peliculaSerieController.update);
Router.delete('/delete', peliculaSerieController.delete);

module.exports = Router;