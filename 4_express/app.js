const express = require('express'); 

const app = express();

//Rota e Parametros

app.get("/",function(req, res){
    res.send("Seja bem-vindo ao meu app")
})

app.get("/sobre",function(req,res){
    res.send("Minha pagina sobre")
})

app.get("/blog",function(req,res){
    res.send("Bem-vindo ao meu blog")
})

//Parametros em rotas

app.get("/ola/:nome/:cargo",function(req,res){
    res.send(req.params)
})


app.listen(8082,function(){
    console.log('Servidor rodando na url http://localhost:8082');
})
