const Event = require('../../database/models/Event');
const Location = require('../../database/models/Location');
exports.putController = async (req, res) => {
    console.log(req.body)
    const { id } = req.params;
    const { 
        name,           description,    starring,   virtual,        city,   
        region,          country,          address,   pictures,       start_date, 
        finish_date,    schedule,      isRecurrent,    weekdays,       tags,      
         age_rating,     price,       ticket_limit,    locationId,
    } = req.body;
    console.log(id,locationId)
 
    try {
        const result = await Event.update({
            name,           description,    starring,   virtual,          
            address,        pictures,       start_date, finish_date,    schedule,   
            isrecurrent:isRecurrent,    weekdays,       tags,       age_rating,     price,  
            ticket_limit
        },{
            where: {
                 id
            }
        })


        const location = await Location.update({
            city,
            province:region,
            country
        },{
            where: {
                 id:locationId
            }
        })
        res.json({result:result,location:location,msg:'update'})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}