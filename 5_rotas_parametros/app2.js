const express = require('express');

const app = express()

//Parametros em uma url 

app.get('/ola/:nome/:idade',function(req,res){
    //Guardando parametros
    const {nome,idade} = req.params

    //resposta da requisicao
    res.send(`<h1>Seja Bem-vindo ${nome} voce tem ${idade} anos</h1>`)
})

app.listen(8080,function(){
    console.log('Servidor rodando na url http://localhost:8080');
})