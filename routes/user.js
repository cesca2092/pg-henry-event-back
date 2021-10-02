const express = require('express');
const router = express.Router();
const { 
    getAllUsers,
    getUserByID
} = require('../controllers/User/getController');
const { 
    postUser, 
    loginUser
} = require('../controllers/User/postController');

const {
    putController
} = require('../controllers/User/putController')

//GET
router.get('/all',getAllUsers);
router.get('/:id',getUserByID);

//POST
router.post('/',postUser);
router.post('/login',loginUser);

//PUT
router.put('/fav', putController)//Abi



module.exports = router;