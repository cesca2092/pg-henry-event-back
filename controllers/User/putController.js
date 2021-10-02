const User = require('../../database/models/User');

exports.putController = async (req, res) => {
    const { event , id_user} = req.body;
    console.log('"EVENT":', event, '"ID_USER":',id_user)
    try {
        const resp = await User.update({
            favorite:[event]
        },{
            where:{ id : id_user}
        })
        return res.json({msg:`Se agregó con éxito a favoritos '${event.name}' `})
    } catch(error){
        console.log(error)
        res.json({msg: 'Lo siento hubo un error'})
    }
}