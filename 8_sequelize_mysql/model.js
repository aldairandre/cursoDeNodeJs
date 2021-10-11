const Sequelize = require('sequelize'); 

const sequelize = new Sequelize('teste', 'root', 'tuayaniIsabel1',{
    host: 'localhost',
    dialect : 'mysql'
}) //Caminho de ligacao para a db

//Criando postagens

const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
}); //Criacao da tabela com as categorias Titulo e Conteudo

const Usuarios = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade : {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Usuarios.sync({force:true})

// Postagem.sync({force:true}) sincroniza o model postagem com o sql, o parametro {force:true} garante a criacao da tabela

/**ADD DADOS A DB */

Postagem.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "asdgdgjklsdfjlkrhlkerhsfnlsfjkhnksnkjsdfjdkksdfkjsdksdkdkeuweyeikdfnfvnxcmsdksdmksdfksdklsdfklsdf"
})

Usuarios.create({
    nome: "Aldair",
    sobrenome: "Andre",
    idade : 21,
    email: "aldairandre@gmail.com"
})


