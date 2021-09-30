const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Event = sequelize.define('event', {
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
    idEvent:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity:{
        type: DataTypes.STRING,
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
    seating:{
        type: DataTypes.STRING,
        allowNull: false
    },   
},
{
    timestamps: false
}
)

module.exports = Event;