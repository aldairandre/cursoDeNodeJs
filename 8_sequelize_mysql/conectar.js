const Sequelize = require('sequelize'); //

const sequelize = new Sequelize('teste', 'root', 'tuayaniIsabel1',{
    host: 'localhost',
    dialect : 'mysql'
})

sequelize.authenticate().then(
    function(){
        console.log('Conectado com sucesso')
    }
).catch(function(erro){
    console.warn('Falha ao se conectar: \n'+erro)
})

