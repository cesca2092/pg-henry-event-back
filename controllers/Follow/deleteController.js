const User = require('../../database/models/User');
const Promoter = require('../../database/models/Promoter');

exports.deleteController = async (req, res) => {
    try {

    } catch(error) {
        console.log(error);
        res.json({ msg: 'Error. Fijate en la consola' })
    }
};