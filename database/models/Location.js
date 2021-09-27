const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Location = sequelize.define('location', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    timestamps: false
});

module.exports = Location;