const Event = require('../../database/models/Event');
const Location = require('../../database/models/Location');
exports.putController = async (req, res) => {
    console.log(req.body)
    const { id } = req.params;
    const { 
        name,      description,    starring,      virtual,    ticket_limit,       
        address,   pictures,       start_date,    schedule,   weekdays,      
        tags,      age_rating,     price,         section,    country,        
        city,      region,         promoter_id,   locationId
    } = req.body;
   
 
    try {
        const result = await Event.update({
            name,           description,    starring,   virtual,        ticket_limit,       
            address,        pictures,       start_date, schedule,       weekdays,      
            tags,           age_rating,     price,      section,        country,       
            city,           region,         promoter_id,
            

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

exports.putLimit = async (req, res) => {
    console.log(req.body)
    const {dataUpdate,idEvent,type} = req.body
    // if(type === 'sector'){
    //     try{
    //         const result = await Event.update({   
    //             sections:JSON.stringify(dataUpdate),
    //         },{
    //             where: {
    //                  id:idEvent
    //             }
    //         })
    //         res.json({result:result,location:location,msg:'update'})
    //     }catch (error) {
    //         console.log(error)
    //         res.json(error)
    //     }
    // }

    if(type === 'croquis'){
        try{
            const result = await Event.update({   
                sections:JSON.stringify(dataUpdate),
            },{
                where: {
                     id:idEvent
                }
            })
            res.json({result,msg:'update'})
        }catch (error) {
            console.log(error)
            res.json(error)
        }
    }

}