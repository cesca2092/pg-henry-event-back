const Event = require('../../database/models/Event');
const Promoter = require ('../../database/models/Promoter');
const Location = require('../../database/models/Location');

exports.saveInfoEvent = async (req,res) => {
    console.log(req.body.promoter_id)
    const { 
        name,           description,    starring,   remote,        ticket_limit,       
        address,        pictures,       start_date, finish_date,    schedule,   
        isRecurrent,    weekdays,       tags,       age_rating,     price,  

        country,        city,           province,   promoter_id,    section,

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
        console.log(country, province,city)
        const location = await Location.findOrCreate({
            where:{
                country,
                // province:province, //Abi y Daf
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



