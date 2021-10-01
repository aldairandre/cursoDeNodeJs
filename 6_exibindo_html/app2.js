const express = require('express');

const app = express()

//Parametros em uma url 

app.get('/',function(req,res){
    //Enviando pagina html
    //__dirname retorna o diretorio raiz do app
    
    res.sendFile(__dirname + '/html/index.html')
})

app.listen(8081,function(){
    console.log('Servidor rodando na url http://localhost:8081');
})