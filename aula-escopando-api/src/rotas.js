const express = require('express');
const usuarios = require('./controladores/usuarios');
const login = require('./controladores/login');
const postagens = require('./controladores/postagens');
const verificaLogin = require('./filtros/verificaLogin');


const rotas = express();

rotas.post('/cadastro', usuarios.cadastrarUsuario);

rotas.post('/login', login.login);

rotas.use(verificaLogin);

rotas.get('/perfil', usuarios.obterPerfil);
rotas.put('/perfil', usuarios.atualizarPerfil);

rotas.post('/postagens', postagens.novaPostagem);
rotas.get('/postagens', postagens.feed);
rotas.post('/postagens/:postagemId/curtir', postagens.curtir);
rotas.post('/postagens/:postagemId/comentar', postagens.comentar);

module.exports = rotas;