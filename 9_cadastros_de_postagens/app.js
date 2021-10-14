const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
const bodyParse = require('body-parser')


//config

    //Tamplate
        app.engine('handlebars',handlebars({
            defaultLayout: 'main'
        }))
        app.set('view engine', 'handlebars')

    //Body Parse

        app.use(bodyParse.urlencoded({extended: false}))
        app.use(bodyParse.json())

    //BD
        const sequelize = new Sequelize('teste','root','tuayaniIsabel1',{
            host: 'localhost',
            dialect : 'mysql'
        })
        
        sequelize.authenticate().then(() =>{
            console.warn('Conectado a DB')
        }).catch((erro) => {
            console.warn('Falha ao se conectado a DB \n'+erro)
        })
app.get('/cad',(req,res) => {
    res.render('formulario')
})

app.post('/add',(req,res) => {
    //res.send('Formulario Recebido')
    res.send(`Texto: ${req.body.titulo} Conteudo: ${req.body.conteudo}`)
})





app.listen(8080,function(){
    console.warn('Servidor rodando na url https://localhost:8080')
})