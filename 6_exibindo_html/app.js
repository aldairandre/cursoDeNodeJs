const express = require('express');

const app = express()

//Parametros em uma url 
app.use(express.static('public'))

app.get('/',function(req,res){
    //Enviando pagina html
    //__dirname retorna o diretorio raiz do app
    
    res.sendFile(__dirname + '/public/html/index.html')
})


app.get('/index',function(req,res){
    //Enviando pagina html
    //__dirname retorna o diretorio raiz do app
    
    res.sendFile(__dirname + '/public/html/index.html')
})

app.get('/sobre',function(req,res){
    res.sendFile(__dirname + '/public/html/sobre.html')
})

app.get('/redes',function(req,res){
    res.send('<h1>Pagina em atualizacao</h1>')
})

app.listen(8080,function(){
    console.log('Servidor rodando na url http://localhost:8080');
})