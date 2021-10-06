const express = require('express');
const router = express.Router();
const { 
    viewTicketUser,
    viewTicketEvent,
    viewTicketPromoter 
} = require('../controllers/Ticket/getController');
const { 
    createTicket,
} = require('../controllers/Ticket/postController');
const { 
    deleteTicket,
    deleteTicketUser
} = require('../controllers/Ticket/deleteController');


//GET
router.get('/ticket/:userId',viewTicketUser);
router.get('/ticket/event/:eventId',viewTicketEvent );
router.get('/ticket/promoter/:promoterId',viewTicketPromoter );

//POST
router.post('/ticket/create',createTicket);


//DELETE
router.delete('/ticket/delete/:id',deleteTicket)
router.delete('/ticketsUser/delete/:idUser',deleteTicketUser)

module.exports = router;