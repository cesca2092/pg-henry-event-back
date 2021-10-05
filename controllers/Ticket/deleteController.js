const Ticket = require('../../database/models/Ticket');

exports.deleteTicket = async (req,res) => {
    const { id } = req.params
    try {
     let deleteTicket = await Ticket.destroy({
        where: {
            id
        }
    })
    res.send({response:'Ticket Deleted',deleteTicket:deleteTicket})
    } catch (error) {
        res.json(error)
    }
}

exports.deleteTicketUser = async (req,res) => {
    const { idUser } = req.params
    try {
     let deleteTickets = await Ticket.destroy({
        where: {
            idUser
        }
    })
    res.send({response:'Tickets was Deleted',deleteTickets:deleteTickets})
    } catch (error) {
        res.json(error)
    }
}