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
    ejs.renderFile('./views/reqCozinha.ejs', {imagem2:'https://www.sanraphael.com.br/images/home/01%20-%20Logo%20San%20Raphael%20%20Hotel.jpg', title: 'Requisição Web',itensCozinha: utilidades.itensCozinha},(err,html)=> {
        if(err) {
            console.log(err)
        }else {
            pdf.create(html,{}).toFile(`./pdf/${Date.now()}.pdf`, (err,res) => {
                if(err) {
                    console.log(err)
                }else {
                    console.log(res)
                }
            })
        }
    })
    res.send('Formulario recebido')
})

module.exports = router