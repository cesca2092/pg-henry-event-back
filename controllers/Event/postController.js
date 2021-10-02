const Event = require('../../database/models/Event');
const Promoter = require ('../../database/models/Promoter');
const Location = require('../../database/models/Location');

exports.saveInfoEvent = async (req,res) => {
    
    const { 
        name,           description,    starring,   remote,        ticket_limit,       
        address,        pictures,       start_date, finish_date,    schedule,   
        isRecurrent,    weekdays,       tags,       age_rating,     price,  
        country,        city,           region,   promoter_id,    section,

    } = req.body;
    
    try {
        const [event,created] = await Event.findOrCreate({
            where:{
                name
            },
            defaults:{
            name,           description,    starring,   remote,        ticket_limit,        
            address,        pictures,       start_date, finish_date,    schedule,   
            isrecurrent:isRecurrent,    weekdays,       tags,       age_rating,     price,  section,

            }
        });
    
        if(!created){
            return res.json({created:false})
        }
        
        const location = await Location.findOrCreate({
            where:{
                country,
                province:region, 
                city,

            }
        })

        event.setLocation(location[0]);


        event.setPromoter(promoter_id);

        return res.json({
            created:true,
            event,
        }) 
        
    
         
        
    } catch (error) {
        console.log(error);
        res.json({msg:'Please check the information'})
    }
      

}



