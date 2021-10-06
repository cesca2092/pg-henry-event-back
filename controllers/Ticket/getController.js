const Ticket = require('../../database/models/Ticket');

exports.viewTicketUser = async (req,res) => {

    const { userId } = req.params

    try {
        let userTickets = await Ticket.findAll({
            where: {
                idUser: userId
            }
        })
        res.json(userTickets)
    } catch (error) {
        res.send(res.send({response:'No tickets or error',error:error}))
    }
}

exports.viewTicketEvent = async (req,res) => {

    const { eventId } = req.params

    try {
        let eventTickets = await Ticket.findAll({
            where: {
                idEvent: eventId
            }
        })
        res.json(eventTickets)
    } catch (error) {
        res.send(res.send({response:'No tickets or error',error:error}))
    }
}

exports.viewTicketPromoter = async (req,res) => {

    const { promoterId } = req.params

    try {
        let promoterTickets = await Ticket.findAll({
            where: {
                idPromoter: promoterId
            }
        })
        res.json(promoterTickets)
    } catch (error) {
        res.send(res.send({response:'No tickets or error',error:error}))
    }
}


exports.viewTicketId = async (req,res) => {

    const { ticketId } = req.params

    try {
        let ticket = await Ticket.findOne({
            where: {
                id:ticketId
            }
        })
        res.json(ticket)
    } catch (error) {
        res.send(res.send({response:'No find ticket or error',error:error}))
    }
}