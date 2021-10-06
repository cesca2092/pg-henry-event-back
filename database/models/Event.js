const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Event = sequelize.define('event', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    starring: {
        type: DataTypes.STRING,
    },
    pictures: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    // remote: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false,
    // },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    start_date: { // AAAA-MM-DD
        type: DataTypes.STRING,
        validate: { isDate: true },
        allowNull: false,
    },
    finish_date: { // AAAA-MM-DD
        type: DataTypes.STRING,
        allowNull: true,
    },
    schedule: { //TEMPORARY. CONVERT INTO SEPARATE MODEL AFTERWARDS
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    isrecurrent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    weekdays: {
        type: DataTypes.ARRAY(DataTypes.ENUM(

            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",

        )),
        allowNull: true,
    },
    tags: { // TEMPORARY. TURN INTO SEPARATE MODEL AFTERWARDS
        type: DataTypes.ENUM(
            "Exteriores", "Interiores", "En vivo", "Recital", "Teatro", "Película", "Disco", "Deportes",
        ),
        allowNull: false,
    },
    age_rating: {
        type: DataTypes.ENUM("0+", "7+", "13+", "18+"),
        allowNull: false,
    },

    sectorize:{
        type: DataTypes.ENUM('no sectorizar', 'sectorizar sin croquis', 'sectorizar con croquis'),
        allowNull: false,
    },

    price: { //SINGULAR FOR NOW. THEN TRY TO TURN INTO PRICES
        type: DataTypes.STRING,//precio si la seccion no tiene sectores
        allowNull: true,
    },
    ticket_limit: {
        type: DataTypes.STRING,//limite si la seccion no tiene sectores
        allowNull: true,
    },
    
    sections : {
        type: DataTypes.JSON()
    }
    // seat_booking: {
    //     /* ?????????????? */
    //     type: DataTypes.STRING,
    //     allowNull: true,
    // },
    // section: {
    //     /* ?????????????? */
    //     type: DataTypes.JSON,
    //     allowNull: true,
    // },

},
    {
        timestamps: false
    }
)

module.exports = Event;