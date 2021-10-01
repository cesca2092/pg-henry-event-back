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