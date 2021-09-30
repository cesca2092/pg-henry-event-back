const User = require('../../database/models/User');

exports.putUser = async (req,res) => {
    // const { id } = req.params;
    const { event, idUser } = req.body;
    console.log('"event":',event,', "idUser":',idUser)
    try {
        const resp = await User.update({
            favorite:event
        },{
            where: { id: idUser }
        })
        return res.json({resp:resp})
    } catch(error){
        console.log(error)
        res.json({msg:'Lo siento hubo un error'})
    }
}