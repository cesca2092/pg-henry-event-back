const Event = require('../../database/models/Event');

exports.putController = async (req, res) => {

    const { id } = req.params;
    const { 
        name,           description,    starring,   virtual,        location,   
        address,        pictures,       start_date, finish_date,    schedule,   
        isRecurrent,    weekdays,       tags,       age_rating,     price,  
        ticket_limit,   section,
    } = req.body;
    try {
        const result = await Event.update({
            name,           description,    starring,   virtual,        location,   
            address,        pictures,       start_date, finish_date,    schedule,   
            isRecurrent,    weekdays,       tags,       age_rating,     price,  
            ticket_limit,   section,
        },{
            where: {
                 id
            }
        })
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}