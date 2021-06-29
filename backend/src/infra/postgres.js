const Sequelize = require('sequelize');
const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`,
    { dialect: 'postgres' });


const sincronizar = async () => {
    try {
        sequelize.sync();

    } catch (error) {
        console.log(error);
    }

}


module.exports = { sequelize, Sequelize, sincronizar };