const Event = require('../../database/models/Event');
const User = require('../../database/models/User');

exports.deleteController = async (req, res) => {
    const { id } = req.params;
    try {
        console.log(id)
        const all = await User.findAll({
            attributes: ['favorite', 'id']
        })
        let id_user;
        let deleteFav;
        all.forEach(async (e) => {
            id_user = e.id
            if (e.favorite.length >= 1) {
                deleteFav = e.favorite.filter((e) => !e.includes(id))
            } else {
                deleteFav = []
            }
            // console.log(deleteFav,'?FOREACH',id_user,'IDD USEERR')
            const result = await User.update({
                favorite: deleteFav
            }, {
                where: { id: id_user }
            })
        })
        await Event.destroy({
            where: {
                id
            }
        })
        res.send('Activity Deleted')
    } catch (error) {
        res.json(error)
    }
}
