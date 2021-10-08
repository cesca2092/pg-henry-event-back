const Event = require('../../database/models/Event');
const Promoter = require ('../../database/models/Promoter');
const Location = require('../../database/models/Location');

exports.saveInfoEvent = async (req,res) => {
    console.log('entreeeeeeeeeee',req.body)
    let sections = ''
    if(req.body.sectorize === 'sectorizar con croquis'){
        sections = JSON.stringify(req.body.sectoresCroquis)
    }else if(req.body.sectorize === 'sectorizar sin croquis'){
        sections = JSON.stringify(req.body.sectores)
    }
    const { 
        name,           description,    starring,   ticket_limit,       
        address,        pictures,       start_date,   schedule,   
        weekdays,       tags,           age_rating,     price,  
        country,        city,           region,   promoter_id,  sectorize  

    } = req.body;
    
    try {
        const [event,created] = await Event.findOrCreate({
            where:{
                name
            },
            defaults:{
            name,           description,    starring,     ticket_limit,        
            address,        pictures,       start_date,   schedule,   
            weekdays,       tags,           age_rating,   price, 
            sections,      sectorize
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



