const express = require('express');
const router = express.Router();
const { 
    viewTicketUser
} = require('../controllers/Ticket/getController');
const { 
    createTicket
} = require('../controllers/Ticket/postController');
const { 
    deleteTicket
} = require('../controllers/Ticket/deleteController');


//GET
router.get('/ticket/:userId',viewTicketUser);

//POST
router.post('/ticket',createTicket);

//DELETE
router.delete('/ticket/delete/:id',deleteTicket)


module.exports = router;