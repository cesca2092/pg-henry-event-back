const Ticket = require('../../database/models/Ticket');

exports.createTicket = async (req,res) => {
    const { 
        idUser, idEvent, price, quantity, direction, date, seating
    } = req.body;

    try {
        let ticket = await Ticket.create(
            {
                idUser,
                idEvent,
                price,
                quantity,
                direction,
                date,
                seating
            }
        )
            res.json({response:'The ticket was created',ticket:ticket})
    } catch (error) {
        res.send({response:'The ticket was not created',error:error});
    }
}

exports.pruebapost = async (req,res) => {
    const { 
        prueba
    } = req.body;

    res.send(prueba)
}


