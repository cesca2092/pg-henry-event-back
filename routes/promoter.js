const express = require('express');
const router = express.Router();
const { 
    getAllPromoters,
    getEventPromoter,
    getPromoter,
} = require('../controllers/Promoter/getController');
const {
    saveInfoPromotor, 
    loginPromoter,
} = require('../controllers/Promoter/postController');



//GET
 router.get('/all',getAllPromoters);
 router.get('/:id',getEventPromoter);
 router.get('/promoter/:id',getPromoter);



//POST
router.post('/',saveInfoPromotor);
router.post('/login',loginPromoter);


module.exports = router;