const express = require('express'); 

const app = express();

app.get('/',function(req,res){
    res.send('Bem vindo a minha rota inicial')
})

app.listen(8080,function(){
    console.log('Servidor rodando na url http://localhost:8080');
})
