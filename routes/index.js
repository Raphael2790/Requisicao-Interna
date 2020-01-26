const express = require('express');
const router = express.Router();
const fs = require('fs');

const utilidades = require('../public/javascripts/utils')


/* GET home page. */
router.get('/', (req, res, next) => {
  utilidades.setores
  res.render('index', { 
    title: 'Requisição Web',
    listaSetores: utilidades.setores,
    link: '/req',
    imagem:'../images/logoSRH.png',
});
});

module.exports = router;
