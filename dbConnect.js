const { Sequelize } = require('sequelize');//från sequelize dependency
//Setup Sequelize
const sequelize = new Sequelize({
 database: 'medie', // Byt namn till din Databas namn
 username: 'root',
 password: 'R0944351861m.', //Inkludera ditt Root-lösenord
 host: 'localhost',
 dialect: 'mysql', // Specificerar vilken databas vi jobbar med
});
module.exports = sequelize
