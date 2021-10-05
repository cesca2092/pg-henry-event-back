const User = require('../../database/models/User');
const Promoter = require('../../database/models/Promoter');

exports.postFollow = async (req, res) => {
    const { user_id, promoter_id } = req.body;

    try {
        User.addPromoter(promoter_id);
        Promoter.addEvent(user_id);

        res.json({ msg:'Now following' })
    } catch (error) {
        console.log(error)
        res.json({msg:'error'})
    }
}