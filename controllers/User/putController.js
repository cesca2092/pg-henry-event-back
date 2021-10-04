const User = require('../../database/models/User');

exports.putController = async (req, res) => {
    const { event , id_user} = req.body;
    // console.log('"EVENT":', event, '"ID_USER":',id_user)
    try {
        const favs = await User.findAll({
            where: {id:id_user},
            attributes: ['favorite']
        })
        let data = favs[0].favorite
        if(data !== null){
        data.push(event)
        }else{
            data = [event]
        }
        console.log(data,'favss')
        const resp = await User.update({
            favorite:data
        },{
            where:{ id : id_user}
        })
        // return res.json(data)
        return res.json({msg:`Se agregó con éxito a favoritos '${event.name}' `})
    } catch(error){
        console.log(error)
        res.json({msg: 'Lo siento hubo un error'})
    }
}