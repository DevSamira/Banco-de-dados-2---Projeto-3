const express = require('express')
const routes = express.Router()
const noteController = require('./controllers/noteController')
const userController = require('./controllers/userController')
const app = express()
const path = require('path')


routes.get('/', (req, res) => res.redirect('/dev'))

routes.get('/dev', noteController.ler)
routes.delete('/deletar/:id', noteController.deletar);
routes.get('/buscar/:texto', noteController.pesquisar);
routes.put('/atualizar/:id', noteController.update);
routes.get('/edit/atualizar/:id', noteController.renderizarPagina);
routes.get('/login',  userController.renderizarLog);

module.exports = routes;