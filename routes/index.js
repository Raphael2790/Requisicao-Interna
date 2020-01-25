const express = require('express');
const router = express.Router();
const fs = require('fs');


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
  const setores = [
   'Cozinha',
   'Restaurante', 
   'Padaria', 
   'Governanca', 
   'Eventos', 
   'Financeiro',
   'Choperia']
  res.render('index', { 
    title: 'Requisição Web',
    listaSetores: setores,
    link: '/req',
    imagem:'../images/logoSRH.png',
});
});

module.exports = router;
