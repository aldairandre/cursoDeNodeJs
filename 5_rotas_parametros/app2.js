const express = require('express');

const app = express()

//Parametros em uma url 

app.get('/ola/:nome/:idade',function(req,res){
    //Guardando parametros
    const nome = String(req.params['nome'])
    const idade = parseInt(req.params['idade'])

    //resposta da requisicao
        res.send(`Seja Bem-vindo ${nome} voce tem ${idade} anos`)
})

app.listen(8081,function(){
    console.log('Servidor rodando na url http://localhost:8081');
})