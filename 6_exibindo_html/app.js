const express = require('express');

const app = express()

//Parametros em uma url 

app.get('/index',function(req,res){
    //Enviando pagina html
    //__dirname retorna o diretorio raiz do app
    
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/sobre',function(req,res){
    res.sendFile(__dirname + '/html/sobre.html')
})

app.get('/redes',function(req,res){
    res.send('<h1>Pagina em atualizacao')
})

app.listen(8081,function(){
    console.log('Servidor rodando na url http://localhost:8081');
})