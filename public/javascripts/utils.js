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
    criarPdf: () => {
        let body = document.querySelector('body')
        
        ejs.renderFile(body, {},(err,html)=> {
            if(err) {
                console.log(err)
            }else {
                pdf.create(html,{}).toFile(`../pdf/${Date.now()}.pdf`, (err,res) => {
                    if(err) {
                        console.log(err)
                    }else {
                        console.log(res)
                    }
                    })
                }
            })
    }
}

module.exports = utilidades