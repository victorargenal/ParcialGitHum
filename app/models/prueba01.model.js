module.exports = (sequelize, Sequelize) => {

    const Prueba01 = sequelize.define("prueba01", {
        
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        edad: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        ingreso:{
            type: Sequelize.DATE,
            allowNull: false,
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    });
    return Prueba01;
};