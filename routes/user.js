const express = require('express');
const router = express.Router();
const { 
    getAllUsers,
    getUserByID
} = require('../controllers/User/getController');
const { 
    postUser, 
    loginUser,
    // postFav//Abi 
} = require('../controllers/User/postController');

//GET
router.get('/all',getAllUsers);
router.get('/:id',getUserByID);

//POST
router.post('/',postUser);
router.post('/login',loginUser);

// router.post('/fav', postFav)//Abi



module.exports = router;