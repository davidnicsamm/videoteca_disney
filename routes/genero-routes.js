const express = require('express');
const Router = express.Router();
const generoController = require('../controllers/genero-controller');

Router.get('/list', generoController.read);
Router.get('/readByName', generoController.readByName);
Router.post('/create', generoController.create);
Router.put('/update/:id',generoController.update);
Router.delete('/delete',generoController.delete);


module.exports = Router;