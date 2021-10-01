const express = require('express')

const app = express()

//Rotas 

app.get('/',function(req,res){
    res.send('Bem vindo a minha rota inicial')
})

app.get('/pag2',function(req,res){
    res.send('Bem vindo a rota 2')
})

app.get('/pag3',function(req,res){
    res.send('Bem vindo a rota 3')
})

app.get('/pag4',function(req,res){
    res.send('Bem vindo a rota 4')
})

app.listen(8081,function(){
    console.log('Servidor rodando na url http://localhost:8081');
})