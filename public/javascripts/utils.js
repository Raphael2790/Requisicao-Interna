const ejs = require('ejs');
const fs = require('fs');
const pdf = require('html-pdf')

const utilidades = {
     setores :[
    'Cozinha',
    'Restaurante', 
    'Padaria', 
    'Governanca', 
    'Eventos', 
    'Financeiro',
    'Choperia',
    'Lavanderia',  
     ],
    criarPdf: (ejsview) => {
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
    })},
    itensCozinha: ['Arroz', 'Feijão', 'Macarrão', 'Presunto'],
}

module.exports = utilidades