const express = require('express');
const router = express.Router();
const { 
    viewTicketUser,
    prueba
} = require('../controllers/Ticket/getController');
const { 
    createTicket,
    pruebapost
} = require('../controllers/Ticket/postController');
const { 
    deleteTicket
} = require('../controllers/Ticket/deleteController');


//GET
router.get('/ticket/:userId',viewTicketUser);
router.get('/prueba',prueba);

//POST
router.post('/ticket/create',createTicket);
router.post('/pruebapost',pruebapost);

//DELETE
router.delete('/ticket/delete/:id',deleteTicket)


module.exports = router;