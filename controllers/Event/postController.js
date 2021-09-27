const Event = require('../../database/models/Event');
const Promoter = require ('../../database/models/Promoter');
const Location = require('../../database/models/Location');

exports.saveInfoEvent = async (req,res) => {
    const { 
        name,           description,    starring,   virtual,        ticket_limit,       
        address,        pictures,       start_date, finish_date,    schedule,   
        isRecurrent,    weekdays,       tags,       age_rating,     price,  
        country,        city,           province,   promoter_id
    } = req.body;

    try {
        const [event,created] = await Event.findOrCreate({
            where:{
                name
            },
            defaults:{
            name,           description,    starring,   virtual,        ticket_limit,        
            address,        pictures,       start_date, finish_date,    schedule,   
            isRecurrent,    weekdays,       tags,       age_rating,     price,  
            }
        });
    
        if(!created){
            return res.json({msg:'The event name already exists'})
        }
        
        
        const location = await Location.findOrCreate({
            where:{
                country,
                province,
                city
            }
        })

        event.setLocation(location[0]);
        event.setPromoter(promoter_id);

        return res.json({
            msg:'Event created!!!',
            event
        }) 
        
    
         
        
    } catch (error) {
        console.log(error);
        res.json({msg:'Please check the information'})
    }
      

}


