const express = require('express');
const router = express.Router();
const fs = require('fs');

const utilidades = require('../public/javascripts/utils')


/*function transformPDF(pagina) {
  pdf.create(pagina).toFile('../pdf/Requisicao_Salva.pdf',(err,res) => {
    if(err) {
      console.log(err)
    } else{
      console.log(res)
      }
    }
  )
} */

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
