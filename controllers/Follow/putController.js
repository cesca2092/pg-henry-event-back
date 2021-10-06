const User = require('../../database/models/User');
const Promoter = require('../../database/models/Promoter');

exports.putController = async (req, res) => {
    const { id_promoter, id_user } = req.body;
    // console.log('"EVENT":', event, '"ID_USER":', id_user)
    try {
        const favs = await User.findAll({
            where: { id: id_user },
            attributes: ['favorite']
        })
        const eventDate = await Event.findAll({
            where:{id: event.id || event},
            attributes: ['start_date']
        })
        event.date = eventDate
        let data = favs[0].favorite
        if (typeof (event) === 'object') {
            if (data !== null) {
                data.push(event)
                // data = []
            } else {
                data = [event]
                // data = []
            }
            const resp = await User.update({
                favorite: data
            }, {
                where: { id: id_user }
            })
            return res.json({ msg: `Se agregó con éxito a favoritos '${event.name}' ` })
        } else if (typeof (event) === 'string') {
            let deleteFav = data.filter((e) => !e.includes(event))
            const resp = await User.update({
                favorite: deleteFav
            }, {
                where: { id: id_user }
            })
            return res.json({ msg: `Se eliminó de favoritos! ` })
        }
    } catch (error) {
        console.log(error)
        res.json({ msg: 'Lo siento hubo un error' })
    }
}