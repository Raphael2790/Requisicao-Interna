const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const pdf = require('html-pdf');


const utilidades = require('../public/javascripts/utils')



router.get('/', (req, res , next) => {
    res.render('reqCozinha', {
        title: 'Requisição Web',
        listaSetores: utilidades.setores,
        link: '/req',
        imagem:'../images/logoSRH.png',
        itensCozinha: utilidades.itensCozinha
        });
} );

router.post('/', (req, res, next) => {
    res.send(req.body.Presunto)
})

module.exports = router