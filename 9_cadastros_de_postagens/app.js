//Modulos
const express = require('express'); 
const app = express(); //servidor 
const handlebars = require('express-handlebars')  //Tamplate Engine
const Sequelize = require('sequelize') //Banco de dados

//Config
    //Tamplate Engine

        app.engine('handlebars',handlebars({
            defaultLayout : 'main'
         }))
        app.set('view engine','handlebars')

    //conexacao com Banco de dados mysql
        const sequelize = new Sequelize('teste', 'root','tuayaniIsabel1',{
            host : 'localhost',
            dialect : 'mysql'
        })

        sequelize.authenticate().then(function(){
            console.log('Conectado com sucesso')
        }).catch(function(erro){
            console.warn('Falha ao se conectar: \n'+erro)
        })

//Rotas 

app.get('/cad',function(req,res){
   res.render('formulario')
})

app.listen(8081,function(){
    console.warn('Servidor rodando na url http://localhost:8081');
})
