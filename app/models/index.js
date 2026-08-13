const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,          
    dialect: dbConfig.dialect,    

    dialectOptions: {
    ssl: {
        require: true,             
        rejectUnauthorized: false
        }
    },

  // Configuración del pool de conexiones para optimizar el rendimiento
    pool: {
        max: dbConfig.pool.max,   
        min: dbConfig.pool.min,     
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle     
    }
});

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelize;

//Agregar los necesarios
db.prueba01 = require("./prueba01.model.js")(sequelize, Sequelize);

//db.productos = require("./producto.model.js")(sequelize, Sequelize);

module.exports = db;