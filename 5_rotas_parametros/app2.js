const express = require('express');

const app = express()

//Parametros em uma url 

app.get('/ola/:nome/:idade',function(req,res){
    //Guardando parametros
    const nome = String(req.params['nome'])
    const idade = parseInt(req.params['idade'])

    //Analizando parametros
    if( nome.toUpperCase === 'Aldair'.toUpperCase && idade === 18){
        
        res.send(`Seja Bem-vindo de volta ${nome} voce tem ${idade} anos`)
        
    }else{
        res.send(`Ola ${req.params['nome']} voce tem ${req.params['idade']} anos`)
    }

})

app.listen(8081,function(){
    console.log('Servidor rodando na url http://localhost:8081');
})