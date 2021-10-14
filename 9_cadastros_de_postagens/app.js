const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParse = require('body-parser')
const Post = require('./models/Posts')


//config

    //Tamplate
        app.engine('handlebars',handlebars({
            defaultLayout: 'main'
        }))
        app.set('view engine', 'handlebars')

    //Body Parse

        app.use(bodyParse.urlencoded({extended: false}))
        app.use(bodyParse.json())

app.get('/',(req,res) => {
    res.render('home')
})

app.get('/cad',(req,res) => {
    res.render('formulario')
})

app.post('/add',(req,res) => {
    Post.create({
        titulo : req.body.titulo,
        conteudo : req.body.titulo
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        res.send('Houve um erro' + erro)
    })
    //res.send('Formulario Recebido')
    //res.send(`Texto: ${req.body.titulo} Conteudo: ${req.body.conteudo}`)
})





app.listen(8080,function(){
    console.warn('Servidor rodando na url https://localhost:8080')
})