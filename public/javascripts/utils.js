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
    'Choperia'],
    criarPdf: (ejsview) => {
        ejs.renderFile(ejsview, {},(err,html)=> {
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
    },
    itensCozinha: ['Arroz', 'Feijão', 'Macarrão', 'Presunto'],
}

module.exports = utilidades