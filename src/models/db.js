const Sequelize = require('sequelize')

const sequelize = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

sequelize.authenticate()
.then(function(){
    console.log("Conectado ao banco de dados!")
  
}).catch(function(){
    console.log("Erro: falha ao conectar ao banco!")
})

module.exports = sequelize