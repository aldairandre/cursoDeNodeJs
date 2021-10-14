const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','root','tuayaniIsabel1',{
    host: 'localhost',
    dialect : 'mysql'
})

sequelize.authenticate().then(() =>{
    console.warn('Conectado a DB')
}).catch((erro) => {
    console.warn('Falha ao se conectado a DB \n'+erro)
})

module.exports = {
    Sequelize,
    sequelize
}