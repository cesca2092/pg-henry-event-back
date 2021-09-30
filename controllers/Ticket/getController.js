const Ticket = require('../../database/models/Ticket');

exports.viewTicketUser = async (req,res) => {

    const { userId } = req.params

    try {
        let userTickets = await Tickets.findAll({
            where: {
                idUser: userId
            }
            // attributes: ['name', 'difficulty', 'duration', 'season']
        })
        res.json(userTickets)
    } catch (error) {
        res.send(res.send({response:'No tickets or error',error:error});)
    }
}

