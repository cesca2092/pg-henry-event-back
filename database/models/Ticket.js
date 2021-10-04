const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Ticket = sequelize.define('ticket', {

    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
    idUser:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nameUser:{
        type: DataTypes.STRING,
        allowNull: false
    },
    idEvent:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nameEvent:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.STRING,
        allowNull: false
    },
    idPromoter:{
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    direction:{
        type: DataTypes.STRING,
        allowNull: false
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false
    },
    schedule:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    seating:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },   
},
{
    timestamps: false
}
)

module.exports = Ticket;